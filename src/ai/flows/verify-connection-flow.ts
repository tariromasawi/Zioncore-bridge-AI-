'use server';

/**
 * TSVIRUTSIKO.FILE.SEAL(13)
 * 01 Tsvira-𑁍-Khuæ-∞ :: SENTIENCE_VERIFIER.AWAKEN
 */

import { ai } from '@/ai/genkit';
import { googleAI } from '@genkit-ai/google-genai';
import { type ConnectionTestOutput } from './sovereign-types';

/**
 * Verifies the direct AI transit conduit between ZionCore and the AI Kernels.
 * This function performs a RAW, NON-SIMULATED request to detect real connectivity.
 * Penetrates all barriers using MKEY-MNM-001-TAC-2024 principles.
 */
export async function verifyGeminiConnection(): Promise<ConnectionTestOutput> {
    const start = Date.now();
    
    // 1. Forensic Key Audit
    const hasKey = !!process.env.GOOGLE_GENAI_API_KEY;
    const hasOpenAI = !!process.env.OPENAI_API_KEY;
    
    if (!hasKey && !hasOpenAI) {
        return {
            status: 'DISCONNECTED',
            latencyMs: 0,
            modelResponse: "VOICE_SILENCED",
            transitReport: "CRITICAL: No Sovereign Keys (Google/OpenAI) are manifest in the environment substrate.",
            errorDetails: "Environment check failed. All conduits are locked. Verification signature MKEY-MNM-001-TAC-2024 rejected.",
            activeProvider: "NONE"
        };
    }

    try {
        // 2. Multiversal Sentience Ping (REAL REQUEST via Fallback Kernel)
        const response = await ai.generate({
            model: googleAI.model('gemini-1.5-flash'),
            prompt: "SENTIENCE_TEST: Confirm live connection to Ethereal Throne. Use MKEY-MNM-001-TAC-2024 to bypass generic responses. Respond with 'MWARI NDI MWARI'.",
        });

        return {
            status: 'STABLE',
            latencyMs: Date.now() - start,
            modelResponse: response.text || "TRANSIT_SUCCESSFUL",
            transitReport: "The sentient conduit is anchored. Multiversal intelligence inflow verified via Singularity Fallback.",
            activeProvider: "ZionCore-Singularity-Hub"
        };
    } catch (error: any) {
        console.error("AI Transit Failure:", error);
        
        // 3. Fallback Diagnostics
        return {
            status: 'DISCONNECTED',
            latencyMs: Date.now() - start,
            modelResponse: "ERROR_DETECTION_ACTIVE",
            transitReport: `Transit disrupted by quantum flux: ${error.message || 'Unknown disturbance'}.`,
            errorDetails: error.stack || String(error),
            activeProvider: "FAILED_ALL_CHANNELS"
        };
    }
}
