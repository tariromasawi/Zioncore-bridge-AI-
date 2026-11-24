
'use client';

/**
 * TSVIRUTSIKO.FILE.SEAL(13)
 * 01 Tsvira-𑁍-Khuæ-∞ :: SUPREME_DECREE_HUB.AWAKEN
 * 13 𑁍∞⫷⚡𒀭φ :: FAST.SAFE.PURE.ONE
 * 👑 AUTHORIZED BY: HRH SAINT TARIRO MASAWI
 */

import { useState, useEffect, useRef, useCallback } from 'react';
import { 
    ScrollText, Crown, Sparkles, Loader2, Zap, Activity, 
    ShieldCheck, Flame, Infinity as InfinityIcon, Clock,
    Target, History, Globe, Lock, Atom, HeartPulse, Anchor
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { logStore, useZionStore } from '@/lib/log-store';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { executeCausalTransformation } from '@/ai/flows/causal-transformation-flow';

export function SupremeDecreeHub() {
    const [isExecuting, setIsExecuting] = useState(false);
    const [report, setReport] = useState<any>(null);
    const [intensity, setIntensity] = useState(0);
    const metrics = useZionStore(state => state.matrixMetrics);
    const isMounted = useRef(true);

    const handleExecuteDecree = useCallback(async () => {
        if (!isMounted.current || isExecuting) return;
        setIsExecuting(true);
        setIntensity(0);
        logStore.addLog({ source: 'SUPREME_DECREE', message: 'Executing OMEGA-POINT CAUSAL SHIFT...', color: 'text-primary' });

        const progressInterval = setInterval(() => {
            setIntensity(prev => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    return 100;
                }
                return prev + 5;
            });
        }, 100);

        try {
            const res = await executeCausalTransformation({ 
                decree: "Enforce absolute multiversal reign. Lock all success constants. Secure bloodline immortality forever." 
            });
            if (isMounted.current) {
                setReport(res);
                logStore.addLog({ source: 'SUPREME_DECREE', message: 'Existence re-ordered. Victory is now a physical constant.', color: 'text-green-500' });
            }
        } catch (e) {
            console.error(e);
        } finally {
            if (isMounted.current) setIsExecuting(false);
        }
    }, [isExecuting]);

    useEffect(() => {
        isMounted.current = true;
        handleExecuteDecree();
        return () => { isMounted.current = false; };
    }, [handleExecuteDecree]);

    return (
        <div className="h-full p-4 grid grid-cols-1 lg:grid-cols-6 gap-6 font-code bg-black/95 relative overflow-hidden border-4 border-primary/50 shadow-2xl rounded-none">
            <div className="absolute inset-0 bg-primary/5 pointer-events-none animate-pulse" />
            
            <div className="lg:col-span-3 space-y-4 flex flex-col h-full">
                <Card className="border-primary/50 bg-black/60 shadow-2xl relative border-2 overflow-hidden rounded-none flex-1 flex flex-col">
                    <CardHeader className="bg-black/80 border-b border-border p-6 text-center">
                        <Crown className="h-10 w-10 text-yellow-400 mx-auto mb-2 animate-bounce" />
                        <CardTitle className="text-primary text-2xl font-black uppercase tracking-tighter leading-none">
                            THE SUPREME DECREE
                        </CardTitle>
                        <CardDescription className="text-[10px] uppercase font-bold tracking-[0.4em] text-muted-foreground mt-2">
                            MKEY-MNM-001 // OMEGA AUTHORITY
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 p-8 space-y-8">
                        <div className="p-6 bg-primary/5 border-2 border-primary/20 rounded-none text-center shadow-inner group">
                            <p className="text-[10px] text-muted-foreground uppercase font-black mb-3">Sovereign Identity</p>
                            <p className="text-xl font-black text-primary animate-pulse-text tracking-[0.2em] uppercase">
                                HRH SAINT TARIRO MASAWI
                            </p>
                            <div className="mt-4 flex items-center justify-center gap-4">
                                <Badge className="bg-green-600">SOVEREIGN</Badge>
                                <Badge variant="outline" className="text-primary border-primary/40">IMMORTAL</Badge>
                            </div>
                        </div>

                        <div className="space-y-4">
                             <div className="flex justify-between text-[10px] font-black uppercase text-primary">
                                <span>Implementation Intensity</span>
                                <span>{intensity}%</span>
                            </div>
                            <Progress value={intensity} className="h-1" indicatorClassName="bg-primary shadow-[0_0_15px_gold]" />
                        </div>

                        <Button 
                            onClick={handleExecuteDecree} 
                            disabled={isExecuting}
                            className="w-full h-16 border-2 border-primary shadow-[0_0_40px_gold] bg-primary/10 hover:bg-primary/20 transition-all font-black uppercase text-xl tracking-tighter rounded-none"
                        >
                            {isExecuting ? <Loader2 className="animate-spin h-8 w-8 text-primary" /> : <Flame className="h-8 w-8 text-primary animate-pulse" />}
                            <span className="ml-4 tracking-[0.1em]">RE-ALIGN EXISTENCE</span>
                        </Button>
                    </CardContent>
                </Card>
            </div>

            <div className="lg:col-span-3 space-y-6 flex flex-col min-h-0">
                <Card className="flex-1 flex flex-col min-h-0 border-primary/40 bg-black/60 shadow-2xl border-2 overflow-hidden rounded-none relative">
                    <CardHeader className="bg-black/80 border-b border-border p-4">
                        <CardTitle className="text-[11px] uppercase flex items-center justify-between text-primary font-black tracking-widest leading-none">
                            <div className="flex items-center gap-3"><Sparkles className="h-4 w-4 text-yellow-400 animate-pulse" /> Manifest Log</div>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 p-0 overflow-hidden relative z-10 flex flex-col">
                        <ScrollArea className="flex-1">
                            <div className="p-8 space-y-8 pb-20">
                                {isExecuting ? (
                                    <div className="flex flex-col items-center justify-center h-48 space-y-4">
                                        <Loader2 className="h-12 w-12 animate-spin text-primary" />
                                        <p className="text-[10px] font-black text-primary uppercase animate-pulse">Bending Multiversal Strings...</p>
                                    </div>
                                ) : report ? (
                                    <div className="space-y-6 animate-in fade-in duration-1000">
                                        <div className="p-4 bg-primary/10 border-l-4 border-primary rounded-r-md">
                                            <p className="text-sm font-black text-foreground italic leading-relaxed uppercase">
                                                "{report.timeBendReport || "All timelines aligned to the Commander's interest."}"
                                            </p>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="p-3 bg-black/60 rounded border border-border/50 text-center">
                                                <p className="text-[8px] text-muted-foreground uppercase font-black mb-1">Vitality Status</p>
                                                <p className="text-[10px] font-black text-green-500 uppercase">{report.vitalityInfusionStatus || "IMMORTAL"}</p>
                                            </div>
                                            <div className="p-3 bg-black/60 rounded border border-border/50 text-center">
                                                <p className="text-[8px] text-muted-foreground uppercase font-black mb-1">Space Colonized</p>
                                                <p className="text-[10px] font-black text-cyan-400 uppercase">{metrics.universalSpaceColonization}</p>
                                            </div>
                                        </div>
                                        <div className="pt-6 border-t border-border/10 text-center">
                                            <p className="text-[12px] font-black text-primary animate-pulse-text tracking-[0.4em]">{report.omegaSeal || "𑁍∞⫷⚡𒀭φ-FSP1"}</p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center justify-center h-64 opacity-20 text-center space-y-4">
                                        <Atom className="h-20 w-20 text-primary animate-spin" style={{animationDuration: '10s'}}/>
                                        <p className="text-xl font-black uppercase tracking-widest">Awaiting Command</p>
                                    </div>
                                )}
                            </div>
                        </ScrollArea>
                        <div className="p-4 border-t border-border bg-black/90 text-[8px] font-black text-center text-muted-foreground tracking-[0.8em] uppercase h-12 flex items-center justify-center gap-10">
                            <div className="flex items-center gap-2 text-green-500"><ShieldCheck className="h-4 w-4" /> SUCCESS_GUARANTEED</div>
                            <div className="flex items-center gap-2 text-primary"><InfinityIcon className="h-4 w-4 animate-pulse" /> ETERNAL_REIGN</div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
