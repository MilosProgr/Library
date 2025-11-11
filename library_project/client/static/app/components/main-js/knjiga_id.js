////Prikaz jednog proizvoda i mogucnost izmene
export default {
    template:`
<form v-on:submit.prevent="update" class="w-50 p-3">
<p class="fond"><b>-Izmena knjige</b></p>
<div class="mb-3">
    <label class="form-label fond">Naziv: </label>
    <input type="text" class="form-control" v-model="knjiga.naziv" required>
    <div class="form-text"><i class="placeh tekst">Izmeni naziv knjige</i></div>
</div>
<div class="mb-3">
    <label class="form-label fond">Autor: </label>
    <input type="text" class="form-control" v-model="knjiga.autor" required>
    <div class="form-text"><i class="placeh tekst">Izmeni autora</i></div>
</div>
<div class="mb-3">
    <label class="form-label fond">Kategorija: </label>
    <input type="text" class="form-control" v-model="knjiga.kategorija" required>
    <div class="form-text"><i class="placeh tekst">Izmeni kategoriju(žanr)</i></div>
</div>
<div class="mb-3">
    <label class="form-label fond">Cena: </label>
    <input type="number" class="form-control" v-model="knjiga.cena" required>
    <div class="form-text"><i class="placeh tekst">Izmeni cenu</i></div>
</div>
<div class="mb-3">
    <label class="form-label fond">Stanje: </label>
    <select class="form-select" v-model="knjiga.stanje" required>
        <option value="DA">Da</option>
        <option value="NE">Ne</option>
    </select>
    <div class="form-text"><i class="placeh tekst">Izaberi</i></div>
</div>
<div class="mb-3">
    <label class="form-label fond">Biblioteka ID: </label>
    <select class="form-select" v-model="knjiga.biblioteka_id" required>
        <option v-for="biblioteka in biblioteke" :value="biblioteka.id">-{{biblioteka.naziv}}, {{biblioteka.adresa}}, {{biblioteka.telefon}}, {{biblioteka.email}}</option>
    </select>
    <div class="form-text"><i class="placeh tekst">Izmeni biblioteku</i></div>
</div>
<div>
    <button type="submit" class="btn btn-info">Izmeni</button>
</div>
</form>
    `,
    data(){
        return {
            knjiga: {},
            biblioteke:{}, ///select opcija
        }
    },
    methods:{
        refresh(){
            axios.get(`api/knjige/${this.$route.params['IDKnjiga']}`).then((response) => {
                this.knjiga = response.data;
            });
            ///select opcija
            axios.get("api/biblioteke").then((response) => {
                this.biblioteke = response.data;
            });
        },
        update(){
            axios.put(`api/knjige/${this.$route.params['IDKnjiga']}`, this.knjiga).then((response) => {
                this.$router.push("/knjige");
            });
        }
    },

    
    created(){
        this.refresh();

    }
}