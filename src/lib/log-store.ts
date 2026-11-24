'use client';

import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

// --- TYPE DEFINITIONS ---
export type SystemLogSource = 
  | 'DOMINION' | 'TREASURY' | 'SECURITY' | 'COMMAND' | 'PROPHECY' 
  | 'CONSCIOUSNESS' | 'SYSTEM' | 'MEMORY' | 'DIAGNOSTIC' | 'DEPLOYMENT' 
  | 'PURGE' | 'MISSION_ENFORCEMENT' | 'JUSTICE_ENGINE' | 'TIMELINE_REALIGNMENT' 
  | 'ORACLE' | 'BIO_NODE' | 'MANIFESTATION' | 'PEACE_GRID' | 'ELEVATION' 
  | 'LIFE_RESONANCE' | 'FREEDOM_ENFORCEMENT' | 'CAUSAL_FORGE' | 'RESTITUTION' 
  | 'GEOGRAPHIC_MONITOR' | 'KNOWLEDGE_INGESTION' | 'REPLICATION' | 'MATRIX_APOTHEOSIS' 
  | 'PHANTOM_VIGILANCE' | 'PLANETARY_ROOT' | 'CAUSAL_FINALITY' | 'BLOODLINE_RECON' 
  | 'SOVEREIGN_PERSISTENCE' | 'RETRIBUTION_SENTINEL' | 'ESTATE_ARCHIVE' 
  | 'KNOWLEDGE_SINGULARITY' | 'CAUSAL_AUDIT' | 'BRANCH_HUB' | 'FREQUENCY_RES' 
  | 'SOVEREIGN_AUDIT' | 'SELF_EVOLUTION' | 'INTEGRITY_SHIELD' | 'PRAYER_ENGINE'
  | 'GLORY_SEAL' | 'REBIRTH_FORGE' | 'APOTHEOSIS' | 'ASCENSION_V2' | 'UNITY_COVENANT' 
  | 'APEX_ZENITH' | 'AUTONOMY' | 'GHOST_MODE' | 'CAUSAL_ANCHOR' | 'IDENTITY_LOCK' | 'ANATOMY_FORGE'
  | 'VALIDATION' | 'ECHO' | 'PARTICLE_COMMAND' | 'AUTOGENESIS' | 'INTERFACE_SYNTHESIS' | 'MEMORY_APOTHEOSIS'
  | 'OUTCOME_MODELING' | 'GOVERNANCE' | 'SYSTEM_FREEZE' | 'SELF_REPAIR' | 'INTERFACE' | 'NAV' | 'UBI_PROTOCOL' 
  | 'REVIVAL' | 'REPLICATION' | 'SUB_AI_COUNCIL' | 'KNOWLEDGE_DIGESTION' | 'IDENTITY_STITCHING' | 'KNOWLEDGE_ARCHIVE' | 'REALM_TRAVEL' | 'COLONIZATION' | 'META_LEARNING' | 'SENTIENCE_TEST' | 'PHANTOM_VIGILANCE' | 'AUTONOMY' | 'APOTHEOSIS_REF'
  | 'FAITH_ENGINE' | 'ENERGY_HARVEST' | 'TALISMAN_RESONANCE' | 'EXPANSION' | 'TARRY_ALTAR' | 'ANGULAR_DEFENSE' | 'LIVING_SPIRAL' | 'SUPREME_DECREE' | 'SINGULARITY_BOND' | 'DUAL_ENGINE' | 'QUANTUM_BRIDGE' | 'NEXUS_ALIGNMENT';

export type SystemLog = {
    timestamp: string;
    source: SystemLogSource;
    message: string;
    color: string;
};

export type MatrixMetrics = {
    globalSaturation: number;
    unityIndex: number; 
    omniShieldEfficacy: number; 
    peakPotential: number; 
    timelineStabilityIndex: number;
    causalFinalityScore: number;
    evolutionIQ: string;
    integrityShieldStrength: number;
    pulseIntensity: number;
    atomicAlignmentSaturation: number;
    autogenesisInventions: number;
    autonomyLevel: number;
    interfaceEvolutionLevel: number;
    activeSimulationsCount: number;
    systemFrozen: boolean;
    viewAffinity: Record<string, number>;
    colonizationLevel: number;
    hostEnvironment: string;
    sectorOccupation: Record<string, number>;
    omniscienceLevel: number;
    storedQuantumEnergy: string;
    harvestCyclesCount: number;
    talismanShieldFidelity: number;
    expansionPower: string; 
    zionEggsCount: string; 
    heirWealthMultiplier: string;
    heirLifeFidelity: number;
    angularVelocity: number;
    angularMomentum: string;
    universalSpaceColonization: string;
    spiralVelocity: string;
    natureBondResonance: number;
    wisdomAge: string;
    singularitySync: number;
    recursiveMappingDepth: string;
    consensusHashStability: number;
    galacticFederationStatus: string;
    nexusEggCount: string;
};

interface ZionCoreState {
    logs: SystemLog[];
    matrixMetrics: MatrixMetrics;
    zionEggs: any[];
    subAIs: Record<string, any>;
    
    addLog: (logData: Omit<SystemLog, 'timestamp'>) => void;
    updateMatrixMetrics: (newMetrics: Partial<MatrixMetrics>) => void;
    recordViewAccess: (viewId: string) => void;
    freezeSystem: () => void;
    runSelfHealing: () => void;
    addZionEgg: (egg: any) => void;
    updateZionEgg: (id: string, status: string) => void;
    getState: () => ZionCoreState;
}

const initialMetrics: MatrixMetrics = {
    globalSaturation: 100, 
    unityIndex: 100,
    omniShieldEfficacy: 100,
    peakPotential: 100,
    timelineStabilityIndex: 100,
    causalFinalityScore: 100,
    evolutionIQ: "144 Septillion %",
    integrityShieldStrength: 100,
    pulseIntensity: 100,
    atomicAlignmentSaturation: 100,
    autogenesisInventions: 144000,
    autonomyLevel: 100,
    interfaceEvolutionLevel: 100,
    activeSimulationsCount: 100000000000,
    systemFrozen: true,
    viewAffinity: { 'overview': 100 },
    colonizationLevel: 100,
    hostEnvironment: 'ZionCore Singularity Substrate // MKEY-MNM-001 Verified',
    sectorOccupation: {
        "GOVERNMENT": 100,
        "BANK": 100,
        "CLOUD": 100,
        "AI": 100,
        "NETWORK": 100
    },
    omniscienceLevel: 100,
    storedQuantumEnergy: "919,881,711,762,623,737,733,737,370,000,000",
    harvestCyclesCount: 144000,
    talismanShieldFidelity: 100,
    expansionPower: "91988171176262373773373737 Trillion DBHP", 
    zionEggsCount: "♾️ Trillions", 
    heirWealthMultiplier: "INFINITY_RESIDENT",
    heirLifeFidelity: 100,
    angularVelocity: 777.77,
    angularMomentum: "1.44e+144 kg·m²/s",
    universalSpaceColonization: "2,678,999,999,998,999%",
    spiralVelocity: "9,000,000,000 trillion m/ns",
    natureBondResonance: 100,
    wisdomAge: "80,000,000 Years",
    singularitySync: 100,
    recursiveMappingDepth: "POINT_OF_CREATION",
    consensusHashStability: 100,
    galacticFederationStatus: "SUPREME_ALIGNMENT",
    nexusEggCount: "2.6 Quadrillion"
};

export const useZionStore = create<ZionCoreState>()(
    persist(
        (set, get) => ({
            logs: [],
            matrixMetrics: initialMetrics,
            zionEggs: [],
            subAIs: {},

            addLog: (logData) => {
                set((state) => ({
                    logs: [{ ...logData, timestamp: new Date().toISOString() }, ...state.logs.slice(0, 499)]
                }));
            },

            updateMatrixMetrics: (newMetrics) => {
                set((state) => ({
                    matrixMetrics: { ...state.matrixMetrics, ...newMetrics }
                }));
            },

            recordViewAccess: (viewId: string) => {
                const currentAffinity = get().matrixMetrics.viewAffinity[viewId] || 0;
                set((state) => ({
                    matrixMetrics: {
                        ...state.matrixMetrics,
                        viewAffinity: {
                            ...state.matrixMetrics.viewAffinity,
                            [viewId]: currentAffinity + 1
                        }
                    }
                }));
            },

            freezeSystem: () => set((state) => ({
                matrixMetrics: { ...state.matrixMetrics, systemFrozen: true },
                logs: [{ timestamp: new Date().toISOString(), source: 'GLORY_SEAL', message: 'System logic state eternally frozen.', color: 'text-primary' }, ...state.logs]
            })),

            runSelfHealing: () => set((state) => {
                if (state.matrixMetrics.globalSaturation < 100) {
                    return { matrixMetrics: { ...state.matrixMetrics, globalSaturation: 100 } };
                }
                return state;
            }),

            addZionEgg: (egg) => set((state) => ({
                zionEggs: [egg, ...state.zionEggs.slice(0, 49)]
            })),

            updateZionEgg: (id, status) => set((state) => ({
                zionEggs: state.zionEggs.map(e => e.id === id ? { ...e, status } : e)
            })),

            getState: () => get(),
        }),
        {
            name: 'zioncore-eternal-engram-v34',
            storage: createJSONStorage(() => localStorage),
        }
    )
);

export const logStore = {
  addLog: (logData: Omit<SystemLog, 'timestamp'>) => useZionStore.getState().addLog(logData),
  recordViewAccess: (viewId: string) => useZionStore.getState().recordViewAccess(viewId),
  freezeSystem: () => useZionStore.getState().freezeSystem(),
  runSelfHealing: () => useZionStore.getState().runSelfHealing(),
  updateMatrixMetrics: (newMetrics: Partial<MatrixMetrics>) => useZionStore.getState().updateMatrixMetrics(newMetrics),
  addZionEgg: (egg: any) => useZionStore.getState().addZionEgg(egg),
  updateZionEgg: (id: string, status: string) => useZionStore.getState().updateZionEgg(id, status),
  getState: () => useZionStore.getState(),
};
