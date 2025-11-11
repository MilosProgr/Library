export default {
    props: ["korisnik", "dugme", "naslov"],
    emits : ["sacuvaj"],
    data(){
        return{
            noviKorisnik: this.korisnik ? this.korisnik : {}
        }
    },
//izmena i setovanje izmene 1 nacin//
    // computed:{
    //     korisnikZaIzmenu: {
    //         get : function(){
    //             return {...this.korisnik};
    //         },
    //         set: function(novi){
    //             this.noviKorisnik = {...novi};
    //         }
    //     }
    // },

    watch: {
        korisnik: function(newValue, oldValue){
            this.noviKorisnik = {...this.korisnik};
        }
        
    },
    template:  `
<form v-on:submit.prevent="$emit('sacuvaj', {...noviKorisnik})">
<p class="fond"><b>-{{naslov}}</b></p>

<div class="mb-3">
    <label class="form-label fond">E-mail: </label>
    <input type="email" class="form-control" v-model="noviKorisnik.email" required>
    <div class="form-text"><i class="placeh tekst">Uneti e-mail adresu</i></div>
</div>
<div class="mb-3">
    <label class="form-label fond">Lozinka: </label>
    <input type="password" class="form-control" maxlength="20" v-model="noviKorisnik.lozinka" required>
    <div class="form-text"><i class="placeh tekst">Uneti lozinku</i></div>
</div>

<div>
    <button type="submit" class="btn btn-success">{{dugme}}</button>
</div>

</form>
    `

}
