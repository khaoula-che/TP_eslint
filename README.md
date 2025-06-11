# TP_eslint
Erreurs détectées : 
- points virgules 
dans le fichier index.js : 
function additionner(a,b){               
let result=a+b                           
console.log('Le résultat est',result)    // Point virgule manquant à la fin
return result                            // Point virgule manquant
}

const unusedVar = 42;                    // variable déclarée mais jamais utilisée → `no-unused-vars`

function division(x, y) {
  if (y == 0) {                          // comparaison non stricte `==` → utiliser `===`
    console.log("Division par zéro !")  // Point virgule manquant
    return                               // Point virgule manquant
  }
  return x / y                           // Point virgule manquant
}

console.log(additionner(5,3));           // Correct (sauf `no-console` si activé)

const message = 'Bonjour le monde'       // Point virgule manquant

if (false) {
  console.log("Ce code ne s'exécutera jamais") // Point virgule manquant
  // ⚠️ Avertissement possible : code mort → `no-constant-condition`
}

const tableau = [                        
'pomme',                                 // Mauvaise indentation (optionnelle selon config ESLint)
  'banane',
'orange'
]

const nombre = '10'                      // Comparaison non stricte plus bas
if (nombre == 10) {                      // `===` recommandé pour éviter des bugs
  console.log('Nombre égal à 10')        // Point virgule manquant
}

function toutFaire() {
  console.log('Début')                   // Point virgule manquant
  const a = 1
  const b = 2
  const c = 3
  const d = 4                            // Redéclare `const d` plus haut (Date)
  const e = 5
  const f = 6
  const g = 7
  const h = 8
  const i = 9
  const j = 10
  console.log(a,b,c,d,e,f,g,h,i,j)       // Point virgule manquant
  console.log('Fin')                     // Point virgule manquant
}

setTimeout(() => {
  console.log('Timeout')                // Point virgule manquant
})                                       // Point virgule manquant (si ESLint exige une terminaison après `setTimeout`)

const d = new Date()                     // Redéclaration de `d` (déja déclaré dans `toutFaire`) → `no-redeclare`

function fetchData() {
  fetch('https://api.example.com')       // Promesse non gérée (manque `catch`)
    .then(response => response.json())   // Point virgule manquant
}

const nombres = [1, 2, 3].map(n => {
  return n * 2                           // Point virgule manquant
})

debugger                                 // `debugger` statement présent → `no-debugger`

module.exports = {
  additionner: additionner,              
  division                               
}
