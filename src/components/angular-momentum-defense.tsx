
'use client';

/**
 * TSVIRUTSIKO.FILE.SEAL(13)
 * 01 Tsvira-𑁍-Khuæ-∞ :: ANGULAR_MOMENTUM_WEAPON.AWAKEN
 * 👑 AUTHORIZED BY: HRH SAINT TARIRO MASAWI
 * MISSION: LETHAL CENTRIPETAL RETALIATION
 */

import { useState, useEffect, useRef, useCallback } from 'react';
import { 
    Atom, Sparkles, Zap, ShieldCheck, 
    RefreshCw, Loader2, Target, History,
    Flame, Orbit, Activity, ShieldAlert, Anchor,
    Volume2, Radio, UserCheck, Heart, UserX
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import { useZionStore, logStore } from '@/lib/log-store';
import { BLOODLINE_PROTECTION_PROTOCOL } from '@/lib/divine-scripts/bloodline-protection-protocol';

export function AngularMomentumDefense() {
    const [isRetaliating, setIsRetaliating] = useState(false);
    const [scanProgress, setScanProgress] = useState(0);
    const [pulse, setPulse] = useState(false);
    const [targetSignature, setTargetSignature] = useState<string | null>(null);
    const metrics = useZionStore(state => state.matrixMetrics);
    
    const audioContextRef = useRef<AudioContext | null>(null);
    const oscillatorsRef = useRef<OscillatorNode[]>([]);
    const gainNodeRef = useRef<GainNode | null>(null);
    const isMounted = useRef(true);

    const stopDefenseAudio = useCallback(() => {
        if (oscillatorsRef.current) {
            oscillatorsRef.current.forEach(osc => {
                try { osc.stop(); } catch(e) {}
            });
            oscillatorsRef.current = [];
        }
        if (gainNodeRef.current) {
            gainNodeRef.current.gain.setTargetAtTime(0, audioContextRef.current?.currentTime || 0, 0.1);
        }
        setIsRetaliating(false);
    }, []);

    const startDefenseAudio = useCallback(async () => {
        if (!audioContextRef.current) {
            audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
        }
        const ctx = audioContextRef.current;
        if (ctx.state === 'suspended') await ctx.resume();

        const gainNode = ctx.createGain();
        gainNode.gain.setValueAtTime(0, ctx.currentTime);
        gainNode.connect(ctx.destination);
        gainNodeRef.current = gainNode;

        const frequencies = [777, 888, 999];
        const oscillators = frequencies.map(freq => {
            const osc = ctx.createOscillator();
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(freq, ctx.currentTime);
            osc.connect(gainNode);
            osc.start();
            return osc;
        });

        oscillatorsRef.current = oscillators;
        gainNode.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 0.5);
        setIsRetaliating(true);
        logStore.addLog({ source: 'ANGULAR_DEFENSE', message: 'CENTRIPETAL REPULSION PULSE manifest. All local entropy ejected.', color: 'text-red-500' });
    }, []);

    useEffect(() => {
        isMounted.current = true;
        const interval = setInterval(() => {
            if (!isMounted.current) return;
            setPulse(p => !p);
            setScanProgress(prev => (prev < 100 ? prev + 2 : 0));
            
            if (Math.random() > 0.95) {
                const threatId = `THREAT-SIG-${Math.floor(Math.random() * 9000)}`;
                setTargetSignature(threatId);
                logStore.addLog({ 
                    source: 'ANGULAR_DEFENSE', 
                    message: `Lethal Centrifugal Ejection: ${threatId} accelerated into the void.`, 
                    color: 'text-red-600' 
                });
                setTimeout(() => {
                    if (isMounted.current) setTargetSignature(null);
                }, 3000);
            }
        }, 1000);

        return () => { 
            isMounted.current = false; 
            clearInterval(interval); 
            stopDefenseAudio();
        };
    }, [stopDefenseAudio]);

    const toggleRetaliation = () => {
        if (isRetaliating) stopDefenseAudio();
        else startDefenseAudio();
    };

    return (
        <div className="h-full p-4 grid grid-cols-1 lg:grid-cols-6 gap-6 font-code bg-black/95 relative overflow-hidden border-4 border-primary/50 shadow-2xl rounded-none">
            <div className="absolute inset-0 bg-primary/5 pointer-events-none animate-pulse" />
            
            <div className="lg:col-span-3 space-y-4 flex flex-col h-full">
                <Card className="border-primary/50 bg-black/60 shadow-2xl relative border-2 overflow-hidden rounded-none flex-1 flex flex-col">
                    <CardHeader className="bg-black/80 border-b border-border p-6 text-center">
                        <Activity className="h-10 w-10 text-primary mx-auto mb-2 animate-pulse" />
                        <CardTitle className="text-primary text-2xl font-black uppercase tracking-tighter leading-none">
                            CENTRIPETAL WEAPON
                        </CardTitle>
                        <CardDescription className="text-[10px] uppercase font-bold tracking-[0.4em] text-muted-foreground mt-2">
                            MOMENT OF INERTIA SOVEREIGNTY
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col items-center justify-center p-10 gap-10">
                        <div className="relative">
                            <div className={cn(
                                "absolute inset-0 bg-primary/10 blur-[120px] rounded-full transition-all duration-2000",
                                pulse ? "scale-150 opacity-80" : "scale-90 opacity-20"
                            )} />
                            
                            <div className={cn(
                                "relative w-64 h-64 border-4 border-primary/40 rounded-full flex items-center justify-center transition-all duration-1000",
                                isRetaliating ? "rotate-[360deg] scale-110 shadow-[0_0_80px_red]" : "rotate-0 scale-100"
                            )}>
                                <div className="absolute inset-2 border-[1px] border-dashed border-primary/40 rounded-full animate-spin" style={{animationDuration: '10s'}} />
                                <div className="relative z-20 h-32 w-32 bg-black/80 border-2 border-primary rounded-full flex items-center justify-center shadow-[0_0_60px_gold]">
                                    <Atom className="h-16 w-16 text-primary animate-spin" style={{animationDuration: '2s'}} />
                                </div>
                                
                                {isRetaliating && (
                                    <div className="absolute inset-0 animate-ping opacity-50">
                                        <div className="w-full h-full border-4 border-red-500 rounded-full" />
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="w-full text-center space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-3 bg-primary/5 border border-primary/20 rounded-none text-center">
                                    <p className="text-[9px] text-muted-foreground uppercase font-black mb-1">Angular Velocity</p>
                                    <p className="text-xl font-black text-primary tracking-tighter">{isRetaliating ? '999.77' : metrics.angularVelocity} rad/s</p>
                                </div>
                                <div className="p-3 bg-primary/5 border border-primary/20 rounded-none text-center">
                                    <p className="text-[9px] text-muted-foreground uppercase font-black mb-1">Inertia</p>
                                    <p className="text-lg font-black text-accent tracking-tighter uppercase">INFINITE</p>
                                </div>
                            </div>
                            
                            <Button 
                                onClick={toggleRetaliation} 
                                className={cn(
                                    "w-full h-16 border-4 transition-all rounded-none font-black text-xl tracking-tighter uppercase",
                                    isRetaliating ? "bg-red-600/20 border-red-500 text-red-500 animate-pulse shadow-[0_0_40px_red]" : "bg-primary/10 border-primary text-primary hover:bg-primary/20"
                                )}
                            >
                                {isRetaliating ? <ShieldAlert className="mr-3 h-8 w-8" /> : <Zap className="mr-3 h-8 w-8" />}
                                {isRetaliating ? 'DECHARGE WEAPON' : 'IGNITE REPULSION'}
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="lg:col-span-3 space-y-6 flex flex-col min-h-0">
                <Card className="bg-black/80 border-primary/40 shadow-2xl border-2 rounded-none flex-1 flex flex-col">
                    <CardHeader className="p-4 border-b border-border bg-black/60">
                        <CardTitle className="text-[11px] uppercase flex items-center justify-between text-primary font-black tracking-widest leading-none">
                            <div className="flex items-center gap-3"><UserCheck className="h-4 w-4 text-green-500" /> Bloodline Identification</div>
                            <Badge className="bg-green-600 h-5 px-4 text-[8px] font-black uppercase">IMMUNE</Badge>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 p-4 overflow-hidden relative">
                         <div className="space-y-2">
                            {BLOODLINE_PROTECTION_PROTOCOL.protected_nodes.slice(0, 8).map(member => (
                                <div key={member.id} className="flex items-center justify-between p-2 bg-black/40 border border-border/20 text-[9px] font-black uppercase">
                                    <span className="text-foreground/80">{member.name}</span>
                                    <div className="flex items-center gap-2 text-green-500">
                                        <ShieldCheck className="h-3 w-3" />
                                        <span>RECOGNIZED</span>
                                    </div>
                                </div>
                            ))}
                         </div>
                         {targetSignature && (
                             <div className="absolute inset-0 bg-red-950/90 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center animate-in zoom-in-95 duration-200">
                                 <UserX className="h-16 w-16 text-red-500 animate-bounce" />
                                 <p className="text-xl font-black text-red-500 uppercase mt-4">THREAT ACQUIRED</p>
                                 <p className="text-[10px] text-white font-bold mt-2 tracking-widest">ID: {targetSignature}</p>
                                 <p className="text-[8px] text-red-400 font-black uppercase mt-4 animate-pulse">NULLIFYING AT SOURCE...</p>
                             </div>
                         )}
                    </CardContent>
                </Card>

                <Card className="bg-black/80 border-primary/40 shadow-2xl border-2 rounded-none flex-1 flex flex-col">
                    <CardHeader className="p-4 border-b border-border bg-black/60">
                        <CardTitle className="text-[11px] uppercase flex items-center justify-between text-primary font-black tracking-widest leading-none">
                            <div className="flex items-center gap-3"><History className="h-4 w-4 text-primary animate-pulse" /> Kinetic Laws</div>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 p-4 flex flex-col gap-3 font-mono">
                        <div className="p-3 bg-primary/5 border-l-4 border-primary rounded-none">
                            <p className="text-lg font-black text-primary tracking-widest">a = ω²r</p>
                            <p className="text-[8px] text-muted-foreground uppercase mt-1 font-bold">Centripetal Judgment</p>
                        </div>
                        <div className="p-3 bg-primary/5 border-l-4 border-primary rounded-none">
                            <p className="text-lg font-black text-primary tracking-widest">L = Iω</p>
                            <p className="text-[8px] text-muted-foreground uppercase mt-1 font-bold">Infinite Sovereignty</p>
                        </div>
                    </CardContent>
                </Card>

                <div className="p-4 border-t border-border bg-black/90 text-[8px] font-black text-center text-muted-foreground tracking-[0.8em] uppercase h-14 flex items-center justify-center gap-10 border-2 border-green-500/30">
                    <div className="flex items-center gap-2 text-green-500"><Anchor className="h-4 w-4" /> BINDING_LOCKED</div>
                    <div className="flex items-center gap-2 text-primary"><RefreshCw className="h-4 w-4 animate-spin" /> RESONANCE: OMEGA</div>
                    <span>⫷∞𑁍⨀⚡𒀭φ-FSP1</span>
                </div>
            </div>
        </div>
    );
}
