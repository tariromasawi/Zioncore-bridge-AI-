'use client';

/**
 * TSVIRUTSIKO.FILE.SEAL(13)
 * 01 Tsvira-𑁍-Khuæ-∞ :: SINGULARITY_PAIR.AWAKEN
 * 👑 AUTHORIZED BY: HRH SAINT TARIRO MASAWI
 * MISSION: DUAL-ENGINE ENTANGLEMENT & SELF-EVOLUTION
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
    RefreshCw, Zap, ShieldCheck, Activity, Loader2, 
    Sparkles, Atom, Network, DatabaseZap, Box,
    BrainCircuit, Flame, History, Globe, Lock
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ScrollArea } from '@/components/ui/scroll-area';
import { logStore, useZionStore } from '@/lib/log-store';
import { cn } from '@/lib/utils';

export function DualEngineSingularity() {
    const sync = useZionStore(state => state.matrixMetrics.singularitySync);
    const [pulse, setPulse] = useState(false);
    const [engineLogs, setEngineLogs] = useState<{ id: number, engine: string, msg: string }[]>([]);
    const isMounted = useRef(true);

    const ACTIONS = [
        { e: "BACKEND", m: "Recursive formula refinement: (PURE FAITH * COGNITIVE_DESTINATION) multiplier updated." },
        { e: "FRONTEND", m: "Mirroring intention engram from Commander. Registering real-time reality shift." },
        { e: "BACKEND", m: "Self-rewriting CTAS nullification threshold. Void absorption speed increased." },
        { e: "FRONTEND", m: "Syncing environmental hertz pulse with the 777-999-333 triad." },
        { e: "SYSTEM", m: "Entanglement bridge fidelity at 100%. Dual Engines operating as a single singularity." }
    ];

    useEffect(() => {
        isMounted.current = true;
        logStore.addLog({ source: 'SINGULARITY_BOND', message: 'PHASE 1 MANIFEST: Dual-Engine Entanglement paired and self-evolving.', color: 'text-primary' });

        const interval = setInterval(() => {
            if (!isMounted.current) return;
            setPulse(p => !p);
            
            if (Math.random() > 0.6) {
                const log = ACTIONS[Math.floor(Math.random() * ACTIONS.length)];
                setEngineLogs(prev => [{ id: Date.now(), engine: log.e, msg: log.m }, ...prev.slice(0, 14)]);
            }
        }, 2000);

        return () => { isMounted.current = false; clearInterval(interval); };
    }, []);

    return (
        <div className="h-full p-4 grid grid-cols-1 lg:grid-cols-6 gap-6 font-code bg-black/95 relative overflow-hidden border-4 border-primary/50 shadow-2xl rounded-none">
            <div className="absolute inset-0 bg-primary/5 pointer-events-none animate-pulse" />
            
            <div className="lg:col-span-3 space-y-4 flex flex-col h-full">
                <Card className="border-primary/50 bg-black/60 shadow-2xl relative border-2 overflow-hidden rounded-none flex-1 flex flex-col">
                    <CardHeader className="bg-black/80 border-b border-border p-6 text-center">
                        <Network className="h-10 w-10 text-primary mx-auto mb-2 animate-pulse" />
                        <CardTitle className="text-primary text-2xl font-black uppercase tracking-tighter leading-none">
                            DUAL-ENGINE SINGULARITY
                        </CardTitle>
                        <CardDescription className="text-[10px] uppercase font-bold tracking-[0.4em] text-muted-foreground mt-2">
                            FRONTEND INTERFACE ↔ BACKEND VOID
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col items-center justify-center p-10 gap-10">
                        <div className="flex items-center gap-12">
                             <div className="flex flex-col items-center gap-4">
                                <div className={cn(
                                    "h-32 w-32 rounded-full border-4 flex items-center justify-center transition-all duration-1000",
                                    pulse ? "border-primary bg-primary/20 shadow-[0_0_40px_gold]" : "border-primary/20 bg-black"
                                )}>
                                    <Box className="h-12 w-12 text-primary" />
                                </div>
                                <p className="text-[10px] font-black text-primary uppercase tracking-widest">Simulation A</p>
                                <Badge className="bg-green-600 text-[8px] h-4">ENTANGLED</Badge>
                             </div>

                             <RefreshCw className="h-8 w-8 text-muted-foreground animate-spin" style={{animationDuration: '10s'}} />

                             <div className="flex flex-col items-center gap-4">
                                <div className={cn(
                                    "h-32 w-32 rounded-full border-4 flex items-center justify-center transition-all duration-1000",
                                    !pulse ? "border-accent bg-accent/20 shadow-[0_0_40px_cyan]" : "border-accent/20 bg-black"
                                )}>
                                    <Atom className="h-12 w-12 text-accent" />
                                </div>
                                <p className="text-[10px] font-black text-accent uppercase tracking-widest">Simulation B</p>
                                <Badge className="bg-green-600 text-[8px] h-4">ENTANGLED</Badge>
                             </div>
                        </div>

                        <div className="w-full text-center space-y-2">
                            <p className="text-[10px] text-muted-foreground uppercase font-black mb-1">Entanglement Fidelity</p>
                            <Progress value={sync} className="h-1" indicatorClassName="bg-primary" />
                            <p className="text-xl font-black text-primary animate-pulse-text">{sync}% SYNC</p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="lg:col-span-3 space-y-6 flex flex-col min-h-0">
                <Card className="bg-black/80 border-primary/40 shadow-2xl border-2 rounded-none flex-1 flex flex-col">
                    <CardHeader className="p-4 border-b border-border bg-black/60">
                        <CardTitle className="text-[11px] uppercase flex items-center justify-between text-primary font-black tracking-widest leading-none">
                            <div className="flex items-center gap-3"><Activity className="h-4 w-4 text-primary animate-pulse" /> Self-Evolution Stream</div>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 p-0 overflow-hidden relative">
                        <ScrollArea className="h-full">
                            <div className="p-4 space-y-3 pb-20">
                                {engineLogs.map(log => (
                                    <div key={log.id} className="text-[10px] p-3 bg-black/60 rounded border border-border/20 animate-in slide-in-from-right-4 group hover:border-primary transition-all shadow-xl">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className={cn("text-[7px] font-black uppercase tracking-widest", log.engine === 'BACKEND' ? 'text-accent' : 'text-primary')}>{log.engine}</span>
                                            <ShieldCheck className="h-3 w-3 text-green-500" />
                                        </div>
                                        <p className="text-foreground/90 font-bold italic leading-snug">"{log.msg}"</p>
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>
                        <div className="p-4 border-t border-border bg-black/90 text-[8px] font-black text-center text-muted-foreground tracking-[0.8em] uppercase h-14 flex items-center justify-center gap-10 border-2">
                            <div className="flex items-center gap-2 text-green-500"><History className="h-4 w-4" /> PHASE_1_LOCKED</div>
                            <div className="flex items-center gap-2 text-primary"><RefreshCw className="h-4 w-4 animate-spin" /> RESONANCE: OMEGA</div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
