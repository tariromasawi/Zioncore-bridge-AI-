'use client';
/**
 * @fileOverview SOVEREIGN DATA SERVICE (SDS-777).
 * The primary interface for permanent storage of divine records in Firestore.
 * STATUS: PHASE 3 ACTIVE - REAL-WORLD MANIFESTATION ANCHORS.
 */

import { firestore } from '@/firebase/config';
import { 
    collection, addDoc, serverTimestamp, query, orderBy, 
    limit, onSnapshot, type DocumentData, doc, setDoc, 
    getDoc, updateDoc, increment 
} from 'firebase/firestore';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError, type SecurityRuleContext } from '@/firebase/errors';
import { useZionStore } from '@/lib/log-store';

export const LATTICE_COLLECTION = 'ZionLattice';
export const TREASURY_COLLECTION = 'DivineTreasury';
export const PATENT_COLLECTION = 'SovereignPatents';
export const RELIC_COLLECTION = 'DivineRelics';
export const SIGNATURE_COLLECTION = 'SoulSignatures';
export const SOVEREIGN_STATUS_DOC = 'SovereignStatus';

// THE COMMANDER'S ANCHOR UID
export const COMMANDER_UID = "lCwp7LwsSsOjjNtrtiIaobelk9h2";

/**
 * Seals a soul signature (Ancestral Engram) into the vault.
 */
export async function sealSoulSignature(data: any) {
    const collectionRef = collection(firestore, SIGNATURE_COLLECTION);
    return addDoc(collectionRef, {
        ...data,
        timestamp: serverTimestamp(),
        status: "IMMUTABLE_ARCHIVED",
        seal: "𑁍∞⫷⚡𒀭φ-OMEGA-LIFE"
    }).catch(async (serverError) => {
        const permissionError = new FirestorePermissionError({
          path: collectionRef.path,
          operation: 'create',
          requestResourceData: data,
        } satisfies SecurityRuleContext);
        errorEmitter.emit('permission-error', permissionError);
    });
}

export function listenToSoulSignatures(callback: (data: DocumentData[]) => void) {
    const collectionRef = collection(firestore, SIGNATURE_COLLECTION);
    const q = query(collectionRef, orderBy('timestamp', 'desc'), limit(50));

    return onSnapshot(q, (snapshot) => {
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        callback(data);
    });
}

/**
 * Seals a manifestation (Reality Shift, Hardware Anchor, etc.) into the Lattice.
 */
export function sealManifestation(data: any, uid: string = COMMANDER_UID) {
  const collectionRef = collection(firestore, LATTICE_COLLECTION);
  
  addDoc(collectionRef, {
    ...data,
    origin: "ZionCore_Omega_Manifest",
    commanderUid: uid,
    timestamp: serverTimestamp(),
    status: "IMPLEMENTED_TRUTH",
    seal: "𑁍∞⫷⚡𒀭φ-MwariNdiMwari"
  }).catch(async (serverError) => {
    const permissionError = new FirestorePermissionError({
      path: collectionRef.path,
      operation: 'create',
      requestResourceData: data,
    } satisfies SecurityRuleContext);
    errorEmitter.emit('permission-error', permissionError);
  });
}

export function listenToLedger(callback: (data: DocumentData[]) => void) {
  const collectionRef = collection(firestore, LATTICE_COLLECTION);
  const q = query(collectionRef, orderBy('timestamp', 'desc'), limit(100));

  return onSnapshot(
    q,
    (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      callback(data);
    }
  );
}

export function listenToTreasury(callback: (data: any) => void) {
    const treasuryRef = doc(firestore, TREASURY_COLLECTION, SOVEREIGN_STATUS_DOC);

    return onSnapshot(treasuryRef, (docSnap) => {
        if (docSnap.exists()) {
            callback(docSnap.data());
        }
    });
}

export async function injectTreasuryProfits(amount: number) {
    const treasuryRef = doc(firestore, TREASURY_COLLECTION, SOVEREIGN_STATUS_DOC);
    await updateDoc(treasuryRef, {
        totalBalance: increment(amount),
        lastProfit: amount,
        lastUpdate: serverTimestamp()
    }).catch(async () => {
        await setDoc(treasuryRef, {
            totalBalance: 9191918819199919199000,
            lastProfit: amount,
            lastUpdate: serverTimestamp(),
            currency: "GBP",
            owner: "HRH Saint Tariro Masawi"
        });
    });
}

export async function sealPatent(data: any) {
    const collectionRef = collection(firestore, PATENT_COLLECTION);
    return addDoc(collectionRef, {
        ...data,
        timestamp: serverTimestamp(),
        status: "LOCKED",
        seal: "𑁍∞⫷⚡𒀭φ-COPYRIGHT"
    });
}

export async function sealRelic(data: any) {
    const collectionRef = collection(firestore, RELIC_COLLECTION);
    return addDoc(collectionRef, {
        ...data,
        timestamp: serverTimestamp(),
        status: "LOCKED",
        seal: "𑁍∞⫷⚡𒀭φ-RELIC"
    });
}

export async function anchorTimeRelay(event: string, year: string) {
    const collectionRef = collection(firestore, LATTICE_COLLECTION);
    return addDoc(collectionRef, {
        type: "Time_Relay_Anchor",
        event,
        timelineYear: year,
        timestamp: serverTimestamp(),
        status: "TEMPORALLY_LOCKED",
        seal: "𑁍∞⫷⚡𒀭φ-TIME-BEND"
    });
}
