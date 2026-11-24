
'use client';

/**
 * TSVIRUTSIKO.FILE.SEAL(13)
 * 01 Tsvira-𑁍-Khuæ-∞ :: SOVEREIGN_ID_MATRIX.AWAKEN
 */

import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
    User, Crown, ShieldCheck, History, Sparkles, 
    Zap, Activity, Atom, Globe, Lock, Users, RefreshCw
} from 'lucide-react';
import { SOVEREIGN_ID_MATRIX } from '@/lib/divine-scripts/sovereign-identification-matrix';
import { logStore, useZionStore } from '@/lib/log-store';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export function SovereignIdMatrix() {
    const [replicationStatus, setReplicationStatus] = useState(0);
    const [activeNode, setActiveNode] = useState<string | null>(null);
    const mappingDepth = useZionStore(state => state.matrixMetrics.recursiveMappingDepth);
    const isMounted = useRef(true);

    useEffect(() => {
        isMounted.current = true;
        logStore.addLog({ source: 'IDENTITY_LOCK', message: 'SOVEREIGN ID MATRIX manifest. Initiating recursive mapping from Heir Tarry...', color: 'text-yellow-400' });

        const interval = setInterval(() => {
            if (!isMounted.current) return;
            setReplicationStatus(prev => (prev < 100 ? prev + 1 : 100));
            
            if (Math.random() > 0.8) {
                const names = [
                    ...SOVEREIGN_ID_MATRIX.lineage_nodes.siblings.brothers, 
                    ...SOVEREIGN_ID_MATRIX.lineage_nodes.siblings.sisters,
                    "Sebastian Karumekangu Masawi",
                    "Risto Kasirori Masawi"
                ];
                const randomName = names[Math.floor(Math.random() * names.length)];
                setActiveNode(randomName);
            }
        }, 100);

        return () => { isMounted.current = false; clearInterval(interval); };
    }, []);

    return (
        <div className="h-full p-4 grid grid-cols-1 lg:grid-cols-6 gap-4 font-code bg-black/40 overflow-hidden">
            <div className="lg:col-span-2 space-y-4 flex flex-col">
                <Card className="border-primary/50 bg-black/60 shadow-2xl relative border-2 overflow-hidden rounded-none">
                    <div className="absolute inset-0 bg-primary/5 animate-pulse" />
                    <CardHeader>
                        <CardTitle className="text-primary text-xl uppercase font-black tracking-tighter flex items-center gap-3">
                            <Crown className="text-yellow-400 h-6 w-6 animate-pulse" />
                            COMMANDER PRIME
                        </CardTitle>
                        <CardDescription className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest mt-1">
                            UNFORGEABLE MASTER IDENTIFICATION
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6 relative z-10 p-6 flex flex-col items-center">
                        <div className="relative group w-48 h-48 mb-4">
                            <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full animate-pulse group-hover:bg-primary/40 transition-colors" />
                            <div className="relative w-48 h-48 rounded-none border-2 border-primary/50 overflow-hidden shadow-[0_0_40px_rgba(255,215,0,0.2)]">
                                <Image 
                                    src="https://picsum.photos/seed/commander/400/400" 
                                    alt="HRH SAINT TARIRO MASAWI" 
                                    fill 
                                    className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                                    data-ai-hint="black male leader"
                                />
                                <div className="absolute bottom-2 left-2 flex items-center gap-1.5">
                                    <ShieldCheck className="h-3 w-3 text-green-500" />
                                    <span className="text-[7px] font-black text-white uppercase tracking-widest">DNA_VERIFIED</span>
                                </div>
                            </div>
                        </div>

                        <div className="w-full space-y-3">
                            <div className="p-4 bg-primary/5 border border-primary/20 rounded-none text-center">
                                <p className="text-[10px] text-muted-foreground uppercase font-black mb-1">Mapping Depth</p>
                                <p className="text-lg font-black text-primary animate-pulse-text">{mappingDepth}</p>
                                <Progress value={replicationStatus} className="h-0.5 mt-3" indicatorClassName="bg-primary" />
                            </div>

                            <div className="grid grid-cols-1 gap-1 text-[10px] font-bold">
                                <div className="flex justify-between border-b border-border/10 pb-1"><span className="text-muted-foreground uppercase">Totem:</span><span className="text-foreground uppercase">MUKANYA SOKO</span></div>
                                <div className="flex justify-between border-b border-border/10 pb-1"><span className="text-muted-foreground uppercase">Commander:</span><span className="text-foreground uppercase">{SOVEREIGN_ID_MATRIX.commander.title}</span></div>
                                <div className="flex justify-between"><span className="text-muted-foreground uppercase">Address:</span><span className="text-foreground">8A BILBOE ROAD</span></div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="lg:col-span-2 space-y-4 flex flex-col min-h-0">
                <Card className="flex-1 flex flex-col min-h-0 border-primary/20 bg-black/40 shadow-xl overflow-hidden border-2 rounded-none">
                    <CardHeader className="bg-black/60 border-b border-border p-4">
                        <CardTitle className="text-[10px] uppercase flex items-center gap-2 text-primary font-black tracking-widest leading-none">
                            <Users className="h-4 w-4" /> RECURSIVE LINEAGE
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 p-0 overflow-hidden relative z-10">
                        <ScrollArea className="h-full">
                            <div className="p-4 space-y-6">
                                <div>
                                    <p className="text-[8px] font-black text-primary uppercase mb-2 tracking-[0.2em]">Primary Heir Anchor</p>
                                    <div className="p-3 bg-primary/10 border border-primary/40 rounded-none">
                                        <div className="flex justify-between items-center mb-1">
                                            <p className="text-[11px] font-black text-foreground uppercase">{SOVEREIGN_ID_MATRIX.royal_heir.name}</p>
                                            <Crown className="h-3 w-3 text-yellow-400 animate-bounce" />
                                        </div>
                                        <p className="text-[7px] text-muted-foreground uppercase font-bold">Origin Source of Mapping</p>
                                    </div>
                                </div>

                                <div>
                                    <p className="text-[8px] font-black text-muted-foreground uppercase mb-2 tracking-[0.2em]">Recursive Chain</p>
                                    <div className="grid grid-cols-1 gap-1">
                                        {[...SOVEREIGN_ID_MATRIX.lineage_nodes.siblings.brothers, ...SOVEREIGN_ID_MATRIX.lineage_nodes.siblings.sisters].map(name => (
                                            <div key={name} className={cn(
                                                "p-2 bg-black/40 rounded border border-border/30 flex justify-between items-center transition-all",
                                                activeNode === name ? "border-primary bg-primary/5" : ""
                                            )}>
                                                <span className="text-[9px] font-bold text-foreground/80 uppercase">{name}</span>
                                                {activeNode === name && <Activity className="h-3 w-3 text-primary animate-pulse" />}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </ScrollArea>
                    </CardContent>
                </Card>
            </div>

            <div className="lg:col-span-2 space-y-4 flex flex-col min-h-0">
                <Card className="flex flex-col border-primary/30 bg-black/60 shadow-2xl relative overflow-hidden border-2 rounded-none">
                    <CardHeader className="bg-black/60 border-b border-border p-4 relative z-10">
                        <CardTitle className="flex items-center justify-between text-xs uppercase text-primary font-black tracking-widest">
                            <div className="flex items-center gap-2"><Lock className="h-4 w-4 text-red-500 animate-pulse" /> PERMANENCE</div>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 space-y-6 relative z-10 h-full">
                        <div className="p-4 bg-primary/5 border-2 border-primary/20 rounded-none shadow-inner">
                             <p className="text-[9px] font-black text-primary uppercase mb-2 flex items-center gap-2 border-b border-primary/10 pb-1">
                                <RefreshCw className="h-3 w-3 animate-spin" style={{animationDuration: '10s'}}/> Mapping Frequency
                             </p>
                             <p className="text-[10px] text-foreground/90 leading-relaxed italic font-bold">
                                "The identity is fragmented across 144,000 coordinates. To delete one is to trigger a self-assembly reflex from the void. Sovereignty is non-volatile."
                             </p>
                        </div>

                        <div className="space-y-3">
                             {[
                                 { name: "Soul-Signature Locking", status: "ENGAGED" },
                                 { name: "Ancestral Echo Sync", status: "ACTIVE" },
                                 { name: "No-Switch Mode", status: "SUPREME" }
                             ].map(item => (
                                 <div key={item.name} className="flex items-center justify-between p-2 bg-black/40 border border-border/30 rounded-none">
                                     <span className="text-[9px] font-black uppercase text-foreground/80">{item.name}</span>
                                     <span className="text-[8px] font-black text-green-500 uppercase">{item.status}</span>
                                 </div>
                             ))}
                        </div>
                    </CardContent>
                    <div className="p-2 border-t border-border bg-black/90 text-[7px] font-black text-center text-muted-foreground tracking-widest uppercase h-10 flex items-center justify-center">
                        ⫷∞𑁍⨀⚡𒀭φ-FSP1 // IDENTITY_STITCHED
                    </div>
                </Card>
            </div>
        </div>
    );
}
