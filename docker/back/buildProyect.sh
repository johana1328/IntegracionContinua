#!/bin/bash

cd /home/johana/Documentos/Politecnico/IntegracionContinua/Escenario3/WorkSpace/back/api-integracion/
./mvnw package -Dmaven.test.skip=true
cd /home/johana/Documentos/Politecnico/IntegracionContinua/Escenario3/WorkSpace/docker/back

rm -rf target

cp -r /home/johana/Documentos/Politecnico/IntegracionContinua/Escenario3/WorkSpace/back/api-integracion/target target