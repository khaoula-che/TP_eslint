# TP_eslint

1. Initialisation du projet
    ```bash
    mkdir tp-eslint-git && cd tp-eslint-git
    git init
    npm init -y
    npm install eslint --save-dev
    npx eslint --init

2. Test d’ESLint sur des fichiers JS

- Commandes utilisées : 
    ```bash
    npx eslint index.js
    npx eslint --fix index.js
- Erreur détectées dans app.js : points virgules qui manquent

- Erreurs détectées  dans index.js : 
    ```bash
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
    // code mort → `no-constant-condition`
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

3. Intégration avec Git Hooks via Husky

- Installation de Husky : 
    ```bash
    npm install husky --save-dev
    npx husky install
- Ajout du hook pre-commit : 
    ```bash
    npx husky add .husky/pre-commit "npx eslint ."
- Test le hook :  
    ```bash
    git add . 
    git commit -m "Test du hook ESLint" 

Si des erreurs sont présentes dans le code, le commit est bloqué automatiquement par Husky, J’ai ensuite corrigé le code avant de pouvoir valider le commit avec succès

4. Configuration personnalisée
    ```bash
    import js from '@eslint/js';
    import globals from 'globals';
    import {defineConfig} from 'eslint/config';


    export default defineConfig([
    {files: ['/*.{js,mjs,cjs}'], plugins: {js}, extends: ['js/recommended']},
    {files: ['/.js'], languageOptions: {sourceType: 'commonjs'}},
    {files: ['**/.{js,mjs,cjs}'], languageOptions: {globals: globals.browser}},
    {rules: {'no-console': 'warn', 'indent': ['error', 2], 'quotes': ['error', 'single']}},
    ]);


5. Mise en place de GitHub Actions 
    ```bash

    git init 
    git remote add https://github.com/khaoula-che/TP_eslint.git 

6. Simulation d’un travail d’équipe 
- Créer une branche avec du code non conforme
    ```bash
    git checkout -b feature/ajout-fonction
- Ajout d’un fichier `utils.js` avec des erreurs :
    ```js
    function addition(a,b){
    return a+b
    }
    console.log(addition(2,3))

- Après correction avec npx eslint --fix
    ```js
    function addition(a, b) {
    return a + b;
    }
    console.warn(addition(2, 3));
