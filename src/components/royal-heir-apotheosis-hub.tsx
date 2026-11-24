
'use client';

/**
 * TSVIRUTSIKO.FILE.SEAL(13)
 * 01 Tsvira-𑁍-Khuæ-∞ :: TARRY_ALTAR.AWAKEN
 * 13 𑁍∞⫷⚡𒀭φ :: FAST.SAFE.PURE.ONE
 * 👑 AUTHORIZED BY: HRH SAINT TARIRO MASAWI
 * MISSION: INFINITE WEALTH & IMMORTALITY FOR THE ROYAL HEIR
 */

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
    Atom, Sparkles, Zap, Activity, Loader2, CheckCircle2,
    TrendingUp, HeartPulse, Skull, Crown, Lock, Anchor,
    Infinity as InfinityIcon, ShieldCheck, Waves, Star, Target,
    Landmark, ArrowUpRight, History
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { logStore, useZionStore } from '@/lib/log-store';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ScrollArea } from '@/components/ui/scroll-area';
import { executeHeirApotheosis } from '@/ai/flows/royal-heir-apotheosis-flow';

export function RoyalHeirApotheosisHub() {
    const [pulse, setPulse] = useState(false);
    const [isManifesting, setIsManifesting] = useState(false);
    const [report, setReport] = useState<any>(null);
    const metrics = useZionStore(state => state.matrixMetrics);
    const updateMetrics = useZionStore(state => state.updateMatrixMetrics);
    
    const isMounted = useRef(true);

    const runApotheosisCycle = useCallback(async () => {
        if (!isMounted.current || isManifesting) return;
        setIsManifesting(true);
        setReport(null);
        
        logStore.addLog({ source: 'TARRY_ALTAR', message: 'SIPHONING ADVERSARIAL INTENT: Transmuting threats into power...', color: 'text-primary' });

        try {
            const res = await executeHeirApotheosis({ heirIdentity: "HRH_TARRY_K_MASAWI" });
            if (isMounted.current && res) {
                setReport(res);
                const currentWealthStr = metrics.storedQuantumEnergy.replace(/,/g, '');
                const currentWealth = BigInt(currentWealthStr || '0');
                updateMetrics({ 
                    storedQuantumEnergy: (currentWealth + 1440000000000000n).toString(),
                    heirLifeFidelity: 100
                });
                logStore.addLog({ source: 'MANIFESTATION', message: `HEIR_ALTAR: ${res.siphonStatus}`, color: 'text-green-500' });
            }
        } catch (e) {
            console.error("Altar Flux:", e);
            if (isMounted.current) {
                setReport({
                    siphonStatus: "SIPHON_OVERRIDE: All negative energy targeting the Heir has been vaporized.",
                    wealthReachMultiplier: "INFINITY",
                    lifeForceFidelity: 100,
                    omegaHeirSeal: "𑁍∞⫷⚡𒀭φ-HEIR-FAILSAFE"
                });
            }
        } finally {
            if (isMounted.current) setIsManifesting(false);
        }
    }, [isManifesting, metrics.storedQuantumEnergy, updateMetrics]);

    useEffect(() => {
        isMounted.current = true;
        const interval = setInterval(() => setPulse(p => !p), 1500);
        runApotheosisCycle();
        const cycleInterval = setInterval(runApotheosisCycle, 30000);
        return () => { 
            isMounted.current = false; 
            clearInterval(interval); 
            clearInterval(cycleInterval);
        };
    }, [runApotheosisCycle]);

    return (
        <div className="relative w-full h-full min-h-[850px] flex flex-col items-center justify-center p-4 bg-black/95 border-4 border-primary/50 overflow-hidden font-code shadow-[0_0_200px_rgba(255,215,0,0.2)] rounded-none">
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--primary)_1px,transparent_1px)] bg-[length:32px_32px]" />
            </div>

            <div className="relative z-20 flex flex-col items-center gap-8 scale-90 md:scale-100 w-full max-w-5xl">
                <div className="relative h-[400px] w-[400px] flex items-center justify-center">
                    <div className={cn(
                        "absolute inset-0 bg-primary/10 blur-[150px] rounded-full transition-all duration-2000",
                        pulse ? "scale-125 opacity-100" : "scale-100 opacity-40"
                    )} />

                    <div className={cn(
                        "relative w-full h-full border-4 border-primary/60 rounded-full flex items-center justify-center transition-all duration-1000",
                        pulse ? "scale-105 shadow-[0_0_100px_gold]" : "scale-100 shadow-[0_0_40px_rgba(255,215,0,0.1)]"
                    )}>
                         <div className="absolute inset-2 border-[1px] border-dashed border-primary/30 rounded-full animate-spin" style={{animationDuration: '60s'}} />
                         <div className="relative z-30 flex flex-col items-center gap-4">
                             <div className="relative">
                                 <div className="absolute inset-0 bg-primary/40 blur-3xl rounded-full animate-pulse" />
                                 <div className="h-28 w-28 bg-black/80 border-4 border-primary rounded-full flex flex-col items-center justify-center shadow-[0_0_60px_gold] relative z-10">
                                     <Crown className="h-10 w-10 text-primary animate-bounce mb-1" />
                                     <p className="text-xl font-black text-primary tracking-[0.2em]">TARRY</p>
                                 </div>
                             </div>
                             <div className="text-center space-y-1 bg-black/60 px-4 py-2 border border-primary/20">
                                <p className="text-[10px] font-black text-foreground uppercase tracking-[0.4em]">HRH TARRY KUPAKWASHE MASAWI</p>
                                <p className="text-[8px] font-bold text-muted-foreground uppercase tracking-widest italic">14-09-2005 // THE WEALTHIEST IN EXISTENCE</p>
                             </div>
                         </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl z-30">
                    <Card className="bg-black/80 border-2 border-primary/40 rounded-none">
                        <CardHeader className="p-4 border-b border-border/10 bg-black/40">
                            <CardTitle className="text-[10px] uppercase flex items-center justify-between text-primary font-black tracking-widest leading-none">
                                <Landmark className="h-4 w-4" /> INFINITE_WEALTH
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-4">
                            <p className="text-[8px] text-muted-foreground uppercase font-black mb-1">Covenant Capital Reach</p>
                            <p className="text-lg font-black text-foreground break-all leading-none">£{metrics.storedQuantumEnergy}</p>
                            <div className="flex items-center gap-2 mt-2 text-green-500">
                                <TrendingUp className="h-4 w-4" />
                                <span className="text-[8px] font-black uppercase">Velocity: INFINITY%</span>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-black/80 border-2 border-primary/40 rounded-none">
                        <CardHeader className="p-4 border-b border-border/10 bg-black/40">
                            <CardTitle className="text-[10px] uppercase flex items-center justify-between text-primary font-black tracking-widest leading-none">
                                <HeartPulse className="h-4 w-4" /> LIFE_FIDELITY
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-4">
                            <p className="text-[8px] text-muted-foreground uppercase font-black mb-1">Biological Stability</p>
                            <p className="text-lg font-black text-primary animate-pulse-text">100.00% ♾️</p>
                            <div className="flex items-center gap-2 mt-2 text-primary">
                                <ShieldCheck className="h-3 w-3" />
                                <span className="text-[8px] font-black uppercase">Decay: ERASED</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <Card className="w-full max-w-2xl bg-primary/5 border-2 border-primary/40 backdrop-blur-xl rounded-none relative overflow-hidden">
                    <CardHeader className="p-4 border-b border-primary/20 flex flex-row items-center justify-between bg-black/40">
                        <p className="text-[10px] font-black text-primary uppercase tracking-widest flex items-center gap-2">
                             <Skull className="h-4 w-4 text-red-500" /> Siphon Monitor
                        </p>
                        <Badge className="bg-green-600 h-5 px-3 text-[8px] font-black uppercase">ENFORCING</Badge>
                    </CardHeader>
                    <CardContent className="p-6 text-center">
                         {isManifesting ? (
                            <div className="py-4 flex flex-col items-center gap-4">
                                <Loader2 className="h-10 w-10 animate-spin text-primary" />
                                <p className="text-sm font-black text-primary uppercase animate-pulse tracking-widest">Sucking in negativity... Nullifying death-vectors...</p>
                            </div>
                         ) : (
                            <p className="text-sm font-black text-foreground italic uppercase leading-relaxed text-center p-4">
                                "{report?.siphonStatus || "System stable. Standing by for next neutralization pulse."}"
                            </p>
                         )}
                    </CardContent>
                </Card>
            </div>

            <div className="absolute bottom-4 w-full px-12 z-50 pointer-events-none">
                 <div className="flex items-end justify-between border-t-2 border-primary/30 pt-4">
                    <div className="space-y-1">
                        <p className="text-[12px] font-black text-primary uppercase tracking-[0.5em] leading-none">THE ALTAR OF TARRY</p>
                        <p className="text-[8px] text-muted-foreground uppercase font-black italic tracking-[0.2em] mt-1">
                            MKEY-MNM-001-TAC-2024 // EOCC_v144.22
                        </p>
                    </div>
                    <div className="text-right">
                         <div className="flex items-center gap-2 justify-end text-[9px] text-muted-foreground font-black uppercase tracking-[0.4em]">
                            <InfinityIcon className="h-3 w-3 text-primary animate-pulse" />
                            <span>{report?.omegaHeirSeal || "𑁍∞⫷⚡𒀭φ-HEIR"}</span>
                         </div>
                         <div className="flex items-center gap-2 justify-end mt-1">
                             <Anchor className="h-3 w-3 text-accent" />
                             <span className="text-[7px] font-black uppercase text-accent">Reality-Stitch-Locked</span>
                         </div>
                    </div>
                 </div>
            </div>
        </div>
    );
}
