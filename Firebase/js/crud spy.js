class Espia {
    constructor(id, lat, lng) {
        this.id = id;
        this.lat = lat;
        this.lng = lng;
    };

    borrar(id) {
        db.collection("espiados").doc(id).delete();
    };

    agregar() {
        db.collection('espiados').add({
            id: this.id,
            lat: this.lat,
            lng: this.lng
        });
    }

    editar(id) {
        formularioeditar.nombreeditar.value = this.lat;
        formularioeditar.codigoeditar.value = this.lng;
        formularioeditar.ideditar.value = this.id;
    };

    actualizar() {
        db.collection('espiados').doc(this.id).update({
            lat: this.lat,
            lng: this.lng
        });
    };
};