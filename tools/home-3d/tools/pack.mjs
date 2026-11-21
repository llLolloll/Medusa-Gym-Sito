// Comprime un modello gia' preparato (meshopt): node tools/pack.mjs in.glb out.glb
import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { meshopt, simplifyPrimitive, prune } from '@gltf-transform/functions';
import { MeshoptEncoder, MeshoptDecoder, MeshoptSimplifier } from 'meshoptimizer';
await MeshoptEncoder.ready; await MeshoptDecoder.ready;
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({ 'meshopt.encoder': MeshoptEncoder, 'meshopt.decoder': MeshoptDecoder });
const doc = await io.read(process.argv[2]); await MeshoptSimplifier.ready;
// la fodera interna del guantone si vede appena: non ha senso che pesi piu' della pelle esterna
const inner = +(process.argv[4] || 0);
if (inner) { for (const mesh of doc.getRoot().listMeshes()) for (const p of mesh.listPrimitives()) if (p.getMaterial() && p.getMaterial().getName() === 'parte_de_adentro') simplifyPrimitive(p, { simplifier: MeshoptSimplifier, ratio: inner, error: 0.01 }); await doc.transform(prune({ keepAttributes: true })); }
await doc.transform(meshopt({ encoder: MeshoptEncoder, level: 'medium', pattern: /^(POSITION|NORMAL)$/ }));
await io.write(process.argv[3], doc);
