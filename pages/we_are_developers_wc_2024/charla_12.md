# Quantum Computing for classical developers

## introducción

La computación clásica será "aumentada" por QC
Quantum Computing Processing Unit (QPU)

La gran diferencia:

Bit (0,1) hacia 2exp"n" vs Quantum Bit (0,1) o al mismo tiempo a traves de superposición.
por lo tanto n QBIT pueden representar 2 EXP "n" simultaneamente.
La superposición en si no sirve de mucho por que el resultado VERDADERO se mecla con todos los resultados FALSOS superpuestos (ejecutados simulataneamente).

Quantum Fourier Transformation

## Caso de ejemplo: algorimo quantum para romper encriptación (RSA)

Shor's Algorithm.

Demostración matematica de como se podria resolver una encriptación usando quantum compuint.

El punto principal es que la computación quantica y los QPU solo harrán parte del trabajo de procesamiento, basandose en la computación clasica. Entonces, para resolver el problema de encriptación, primero se plantea el problema de forma clasica y luego se pasa la "carga" de procesamiento a QPU quien hara un procesamiento en paralelo y simultaneo para todas las alternativas para resolver el problema de cifrado. De todas los resultados en simulataneo, solo se toma los "resultados" más probables.

## Problemas actuales

1. Para resolver el algoritmo de shor, RSA-2048 se necesitan 2 millones de QBIT.
2. Error corrección: como corregir las interferencias que puedan hacer colapsar el calculo.

## Aplicaciones prácticas

1. Quantum Machine Learning (QML)
2. Optiization problem
