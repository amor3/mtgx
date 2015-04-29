# MtqX - Programhanterare
Ett exempel på en applikation som kan hantera entiteten:program

## Installera
Projektet använder YeoMan, du kan köra alla NPM kommandon samt grunt serve när du vill deploya.

Just nu är applikationen konfigurerad för att köra en localhost MySQL med db-namn: mtgx samt tabell: program..
Du kan när som helst ändra detta i server/api/program/program.controller.js i objektet var pool..

## Användning

Du kan lägga till nya program samt se dessa i en tabell till höger, vidare kan du söka i tabellen och ta bort rader.
Skulle du vilja ladda hem en xml fil för en specifik programrad så klickar du på skapa xml-fil.

## Utveckling

IDE: IntelliJ 14

Javascript: AngularJS, NodeJS, Filesaver

CSS: Bootstrap 3


## Övrigt

1) Jag har inte tagit hänsyn till ackar i form av growls eller liknande när man pushat data till Db.

2) Jag har inte anpassat allt 100% för alla enhetstyper (col- sm/md/lg) men fungerar för denna demo.

3) Det skulle vara trevligt att lägga till en drag n drop function för att släppa hela XML filer som parsas.

4) Inga tester har utförts men ett lämpligt val hade kanske varit att köra karma, jasmine.

