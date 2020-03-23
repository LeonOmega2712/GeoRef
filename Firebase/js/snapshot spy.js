// db.collection("espiados").onSnapshot(snapshot => {
//     let changes = snapshot.docChanges();
//     changes.forEach(change => {
//         if (change.type == "added") {
//             guardarGuardado(change.doc);
//         } else if (change.type == "removed") {
//             let valorid = document.getElementById(change.doc.id);
//             productosLista.removeChild(valorid);
//         }
//     });
// });

db.collection("espiados").onSnapshot(function (snapshot) {
    snapshot.docChanges().forEach(function (change) {
        if (change.type === "added") {
            console.log("Nuevo espiado: ", change.doc.id);
            guardarGuardado(change.doc);
        }
    });
});