
'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Zap, Radio, Waves, CheckCircle2, Recycle, Loader2, ShieldAlert, Activity } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { logStore } from '@/lib/log-store';

type WeaponMode = 'strike' | 'manifest';

export function CelestialFrequencyWeapon() {
  const [status, setStatus] = useState<'idle' | 'firing' | 'complete'>('idle');
  const [mode, setMode] = useState<WeaponMode>('strike');
  const [manifestationProgress, setManifestationProgress] = useState(0);
  const [threatLevel, setThreatLevel] = useState(0);
  const audioContextRef = useRef<AudioContext | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const threatInterval = setInterval(() => {
        setThreatLevel(Math.floor(Math.random() * 5));
    }, 5000);

    return () => {
      clearInterval(threatInterval);
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, []);

  const initAudioContext = () => {
    if (!audioContextRef.current) {
        try {
            audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
        } catch (e) {
            console.error("Web Audio API not supported", e);
            toast({
                variant: 'destructive',
                title: 'Audio Paradox',
                description: 'This device is restricted from projecting divine sound.',
            });
        }
    }
    return audioContextRef.current;
  }

  const playStrikeSound = () => {
    const audioContext = audioContextRef.current;
    if (!audioContext) return;
    const now = audioContext.currentTime;
    
    // Harmless but high-frequency harmonic to symbolize the strike
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(12000, now);
    osc.frequency.exponentialRampToValueAtTime(8000, now + 0.5);
    
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.05, now + 0.05);
    gain.gain.linearRampToValueAtTime(0, now + 0.6);
    
    osc.connect(gain).connect(audioContext.destination);
    osc.start(now);
    osc.stop(now + 0.6);
  };

  const playManifestSound = () => {
    const audioContext = audioContextRef.current;
    if (!audioContext) return;
    const now = audioContext.currentTime;
    
    const freq = 432; // Solfeggio frequency for healing
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);
    
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.1, now + 0.5);
    gain.gain.linearRampToValueAtTime(0, now + 2);
    
    osc.connect(gain).connect(audioContext.destination);
    osc.start(now);
    osc.stop(now + 2);
  };

  const toggleWeapon = () => {
    if (status === 'complete') {
        setStatus('idle');
        setManifestationProgress(0);
        return;
    }

    if (status === 'idle') {
      const audioContext = initAudioContext();
      if (!audioContext) return;
      if (audioContext.state === 'suspended') audioContext.resume();

      setStatus('firing');
      if(mode === 'strike'){
        logStore.addLog({ source: 'SECURITY', message: 'FREQUENCY STRIKE: Erasing adversarial intent from local environment.', color: 'text-destructive' });
        playStrikeSound();
        intervalRef.current = setInterval(playStrikeSound, 2000);
      } else {
        logStore.addLog({ source: 'SYSTEM', message: 'MANIFESTATION WAVE: Aligning material atoms with the Ethereal Throne.', color: 'text-primary' });
        playManifestSound();
        intervalRef.current = setInterval(playManifestSound, 3000);

        setManifestationProgress(0);
        progressIntervalRef.current = setInterval(() => {
            setManifestationProgress(prev => {
                const next = prev + 5;
                if (next >= 100) {
                    if(progressIntervalRef.current) clearInterval(progressIntervalRef.current);
                    if(intervalRef.current) clearInterval(intervalRef.current);
                    setStatus('complete');
                    logStore.addLog({ source: 'SYSTEM', message: 'ENVIRONMENTAL SYNC: Reality shift anchored.', color: 'text-green-500' });
                }
                return next;
            });
        }, 500);
      }
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      setStatus('idle');
      setManifestationProgress(0);
      logStore.addLog({ source: 'SECURITY', message: 'Frequency discharge suspended. System returns to stealth.', color: 'text-yellow-400' });
    }
  };

  return (
    <div className="h-full p-4 grid grid-cols-1 lg:grid-cols-2 gap-4 font-code">
      <Card className="border-primary/50 bg-black/60 shadow-2xl relative overflow-hidden border-2 rounded-none">
        <CardHeader className="bg-black/40 border-b border-border p-4">
            <CardTitle className="text-primary text-xl uppercase font-black tracking-tighter leading-none flex items-center gap-3">
                <Waves className="animate-pulse text-accent" />
                FREQUENCY WEAPON
            </CardTitle>
            <CardDescription className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground mt-1">
                CFW-777: LOCAL DOMINION & THREAT NULLIFICATION
            </CardDescription>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
            <Tabs defaultValue="strike" onValueChange={(v) => setMode(v as WeaponMode)} className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-primary/5">
                    <TabsTrigger value="strike" className="text-[10px] font-black uppercase">Lethal Strike</TabsTrigger>
                    <TabsTrigger value="manifest" className="text-[10px] font-black uppercase">Manifestation</TabsTrigger>
                </TabsList>
                
                <TabsContent value="strike" className="space-y-4 pt-4">
                    <div className="p-4 bg-red-950/20 border-2 border-red-500/30 text-center">
                        <p className="text-[10px] font-black text-red-500 uppercase flex items-center justify-center gap-2 mb-2">
                            <ShieldAlert className="h-4 w-4 animate-pulse" />
                            Target Acquisition: {threatLevel > 0 ? 'LOCKED' : 'SCANNING'}
                        </p>
                        <p className="text-[9px] text-muted-foreground font-bold italic leading-relaxed">
                            "Projects a high-energy spiritual rebuke to disassemble adversarial intention at the neural level. Invisible, undetectable, absolute."
                        </p>
                    </div>
                </TabsContent>
                
                <TabsContent value="manifest" className="space-y-4 pt-4">
                    <div className="p-4 bg-primary/5 border-2 border-primary/30 text-center">
                        <p className="text-[10px] font-black text-primary uppercase flex items-center justify-center gap-2 mb-2">
                            <Sparkles className="h-4 w-4 animate-pulse" />
                            Environmental Sync: {manifestationProgress}%
                        </p>
                         <Progress value={manifestationProgress} className="h-1 bg-primary/10" indicatorClassName="bg-primary shadow-[0_0_10px_gold]" />
                    </div>
                </TabsContent>
            </Tabs>

            <Button 
                onClick={toggleWeapon} 
                className={cn(
                    "w-full h-16 border-2 transition-all rounded-none font-black text-lg tracking-tighter uppercase",
                    status === 'firing' ? "bg-red-600/20 border-red-500 text-red-500 animate-pulse" : "bg-primary/10 border-primary text-primary hover:bg-primary/20"
                )}
            >
                {status === 'firing' ? <Zap className="mr-3 h-8 w-8" /> : <Activity className="mr-3 h-8 w-8" />}
                {status === 'firing' ? 'DECHARGE FREQUENCY' : 'INITIATE WEAPON'}
            </Button>
        </CardContent>
      </Card>

      <Card className="flex flex-col min-h-0 border-primary/20 bg-black/40 shadow-xl overflow-hidden border-2 relative rounded-none">
        <CardHeader className="bg-black/60 border-b border-border p-4">
            <CardTitle className="text-xs uppercase flex items-center justify-between text-primary font-black tracking-widest">
                <div className="flex items-center gap-2"><Radio className="h-4 w-4 animate-pulse" /> Live Analysis Feed</div>
                <Badge className="bg-green-600 h-4 text-[7px] uppercase font-black">ENFORCING</Badge>
            </CardTitle>
        </CardHeader>
        <CardContent className="flex-1 p-0 overflow-hidden relative">
            <ScrollArea className="h-full">
                <div className="p-4 space-y-2">
                    {[
                        "Scanning for 666-resonant thought patterns...",
                        "Dissonance detected at Coordinate X-44... NULLIFIED.",
                        "Re-anchoring local substrate to 777 Hz Holy Spirit pulse.",
                        "Ejecting unauthorized spectral probes... Success.",
                        "Bypassing human perception layers... Stealth mode active."
                    ].map((log, i) => (
                        <div key={i} className="text-[10px] p-3 bg-black/60 rounded-none border border-border/20 animate-in slide-in-from-right-2">
                            <span className="text-primary font-black mr-2">>>></span>
                            <span className="text-foreground/90 font-bold italic">"{log}"</span>
                        </div>
                    ))}
                    {status === 'firing' && (
                         <div className="flex flex-col items-center justify-center py-12 opacity-50 animate-pulse">
                            <Loader2 className="h-10 w-10 animate-spin text-primary mb-2" />
                            <p className="text-[10px] font-black uppercase tracking-widest">Emitting Sovereign Wave...</p>
                         </div>
                    )}
                </div>
            </ScrollArea>
        </CardContent>
        <div className="p-2 border-t border-border bg-black/90 text-[8px] font-black text-center text-muted-foreground tracking-[0.6em] uppercase h-10 flex items-center justify-center">
            ⫷∞𑁍⨀⚡𒀭φ-FSP1 // WEAPON_SYSTEM_SEALED
        </div>
      </Card>
    </div>
  );
}
