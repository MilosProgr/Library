export default {
    props: ["bibliotekar", "dugme", "naslov"],
    emits : ["sacuvaj"],
    data(){
        return{
            noviBibliotekar: this.bibliotekar ? this.bibliotekar : {}
        }
    },

    watch: {
        bibliotekar: function(newValue, oldValue){
            this.noviBibliotekar = {...this.bibliotekar};
        }
        
    },
    template:  `
<form v-on:submit.prevent="$emit('sacuvaj', {...noviBibliotekar})">
<p class="fond"><b>-{{naslov}}</b></p>

<div class="mb-3">
    <label class="form-label fond">Korisnicko ime: </label>
    <input type="username" class="form-control" v-model="noviBibliotekar.korisnicko_ime" required>
    <div class="form-text"><i class="placeh tekst">Uneti korisnicko ime</i></div>
</div>
<div class="mb-3">
    <label class="form-label fond">Lozinka: </label>
    <input type="password" class="form-control" maxlength="20" v-model="noviBibliotekar.lozinka" required>
    <div class="form-text"><i class="placeh tekst">Uneti lozinku</i></div>
</div>

<div>
    <button type="submit" class="btn btn-success">{{dugme}}</button>
</div>

</form>
    `
    

}
