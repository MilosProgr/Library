export default {
    props: ["biblioteka", "dugme", "naslov"],
    emits : ["sacuvaj"],
    data(){
        return{
            novaBiblioteka: this.biblioteka ? this.biblioteka : {}
        }
    },

    watch: {
        biblioteka: function(newValue, oldValue){
            this.novaBiblioteka = {...this.biblioteka};
        }
        
    },
    template:  `
<form v-on:submit.prevent="$emit('sacuvaj', {...novaBiblioteka})">
<p class="fond"><b>-{{naslov}}</b></p>
<div class="mb-3">
    <label class="form-label fond">Naziv: </label>
    <input type="text" class="form-control" v-model="novaBiblioteka.naziv" required>
    <div class="form-text"><i class="placeh tekst">Uneti naziv</i></div>
</div>
<div class="mb-3">
    <label class="form-label fond">Adresa: </label>
    <input type="text" class="form-control" v-model="novaBiblioteka.adresa" required>
    <div class="form-text"><i class="placeh tekst">Uneti adresu</i></div>
</div>
<div class="mb-3">
    <label class="form-label fond">Telefon: </label>
    <input type="tel" class="form-control" v-model="novaBiblioteka.telefon" required>
    <div class="form-text"><i class="placeh tekst">Uneti kontakt-telefon</i></div>
</div>
<div class="mb-3">
    <label class="form-label fond">E-mail: </label>
    <input type="email" class="form-control" v-model="novaBiblioteka.email" required>
    <div class="form-text"><i class="placeh tekst">Uneti e-mail adresu</i></div>
</div>

<div>
    <button type="submit" class="btn btn-success">{{dugme}}</button>
</div>

</form>
    `

}