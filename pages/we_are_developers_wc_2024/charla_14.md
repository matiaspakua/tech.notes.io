# Scaling Databases

## introduccion

Es "x" suficientemente rápido?
La base de datos es uno de los principales cuellos de botella.

## Before scaling: Optimize, Optimize, Optimize

1. encontrar las querys lentas y arreglarlas
2. optimizar el backend y el acceso a la bbdd (no hacer FIND ALL)
3. implementar chaching (CACHE)
4. mejorar el HW de la PC de la maquina donde corre la BBDD.

## multi-master replication

mantener varias bbdd (server) sincronizadas.
problemas de conflictos en multiples request sobre un mismo DATO ejecutada en diferentes clientes. En este caso, no funciona completamente.

## Read Replication

1 servidor primaria
varios servidores secundarios
el request-response se hace a un servidor primario y el resto de la DATA se sincroniza en background.
El problema de la replicación asincronica es que se puede hacer una lectura de una base de datos secundaria que AUN no ha sido actualizada ocn los datos de la primaria.

## Sharding

Distribuir los datos en distintras base de datos, no hay replication. Pero se necesita de un tercero (REDIS) que te diga donde están esos datos.

El problema es cuando hay un SELECT que necesita datos que estan distribuidos en diferentes servidores: todas las compras de un determinado ususario y los productos asociados. En SQL no se puede hacer un join en distrinso servidores, pero a nivel backend se puede hacer el join en JAVA por ejemplos, pero es lo más ineficientes que hay. 


KISS siempre, antes de caer en Sharding.
