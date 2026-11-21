import os
names=['guantone','ring','sacco','kettlebell','anelli','manubri','pavimento','neon']
have=[n for n in names if os.path.exists(f'/home/claude/fx/assets/{n}.js')]
L=["// Generato da tools/mkindex.py: modelli veri dove pronti, segnaposto altrimenti.","import * as ph from './_ph.js';"]
L+= [f"import {{ build as {n} }} from './{n}.js';" for n in have]
extra=[n for n in ['trofei','gong','rack'] if os.path.exists(f'/home/claude/fx/assets/{n}.js')]   # facoltativi: senza file la scena li salta
L+= [f"import {{ build as {n} }} from './{n}.js';" for n in extra]
L.append('export const A = { '+', '.join([(n if n in have else f'{n}: ph.{n}') for n in names]+extra)+' };')
open('/home/claude/fx/assets/index.js','w').write('\n'.join(L)+'\n'); print('veri:',have)
