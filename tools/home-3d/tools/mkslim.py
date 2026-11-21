"""Genera three_slim.js: solo le parti di three.js che la scena usa davvero (cosi' il pacchetto finale butta via il resto)."""
import re,glob
files=['scene.js','stage.js','storia.js']+[f for f in glob.glob('assets/*.js') if '/_' not in f or f.endswith('_ph.js')]
names=set()
for f in files: names|=set(re.findall(r'\bTHREE\.([A-Za-z_][A-Za-z_0-9]*)',open('/home/claude/fx/'+f).read()))
names=sorted(names)
open('/home/claude/fx/three_slim.js','w').write("// Generato da tools/mkslim.py: non modificare a mano.\nimport { "+', '.join(names)+" } from 'three';\nexport const THREE = { "+', '.join(names)+" };\n")
print(len(names),'parti di three usate')
