////Prikaz jednog proizvoda i mogucnost izmene
export default {
    props: ["greska"],
    template:`
<form v-on:submit.prevent="update" class="w-50 p-3">
<p class="fond"><b>-Izmena kupca</b></p>
<div class="mb-3">
    <label class="form-label fond">Ime: </label>
    <input type="text" class="form-control" v-model="kupac.ime" required>
    <div class="form-text"><i class="placeh tekst">Izmeni ime</i></div>
</div>
<div class="mb-3">
    <label class="form-label fond">Prezime: </label>
    <input type="text" class="form-control" v-model="kupac.prezime" required>
    <div class="form-text"><i class="placeh tekst">Izmeni prezime</i></div>
</div>
<div class="mb-3">
    <label class="form-label fond">Datum rođenja: </label>
    <input type="datetime-local" class="form-control" v-model="kupac.datumRodjenja" required>
    <div class="form-text"><i class="placeh tekst">Izmeni datum rođenja</i></div>
</div>
<div class="mb-3">
    <label class="form-label fond">E-mail: </label>
    <input type="email" class="form-control" v-model="kupac.email" required>
    <div class="form-text"><i class="placeh tekst">Izmeni e-mail adresu</i></div>
</div>
<div class="mb-3">
    <label class="form-label fond">Telefon: </label>
    <input type="tel" class="form-control" v-model="kupac.telefon" required>
    <div class="form-text"><i class="placeh tekst">Izmeni broj telefona</i></div>
</div>
<div class="mb-3">
    <label class="form-label fond">Mesto: </label>
    <input type="text" class="form-control" v-model="kupac.mesto" required>
    <div class="form-text"><i class="placeh tekst">Izmeni mesto stanovanja</i></div>
</div>
<div class="mb-3">
    <label class="form-label fond">Adresa: </label>
    <input type="text" class="form-control" v-model="kupac.adresa" required>
    <div class="form-text"><i class="placeh tekst">Izmeni adresu stanovanja</i></div>
</div>
<div>
    <button type="submit" class="btn btn-info">Izmeni</button>
</div>
<div v-if="greska=='greska'" >
    <h2>Greska pogresan datum</h2>
</div>
</form>
    `,
    data(){
        return {
            kupac: {},
        }
    },
    methods:{
        refresh(){
            axios.get(`api/kupci/${this.$route.params['IDKupac']}`).then((response) => {
                ///Datum pretvaramo u ISO-novoo
                response.data.datumRodjenja = new Date(response.data.datumRodjenja).toISOString().split("Z")[0];
            
                this.kupac = response.data;
            });
        },
        update(){
            axios.put(`api/kupci/${this.$route.params['IDKupac']}`, this.kupac).then((response) => {
                this.$router.push("/kupci");
            });
        }
    },

    
    created(){
        this.refresh();

    }
}