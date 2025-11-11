export default {
    props: ["iznajmljivanje", "naslov"],
    emits:["izmena", "uklanjanje"],

    data(){
        return{
            search: ""
        }
    },
    computed: {
        pronadjenikorisnici(){
            return this.iznajmljivanje.filter(post =>
                post.IDIznajmljivanje === Number(this.search) ||
                post.IDKupac === Number(this.search) ||
                post.IDKnjiga === Number(this.search) ||
                post.kolicina === Number(this.search) ||
                post.nacinPlacanja.toLowerCase().includes(this.search.toLowerCase()) ||
                post.valuta.toLowerCase().includes(this.search.toLowerCase()) ||
                post.periodIznajmljivanja.toLowerCase().includes(this.search.toLowerCase()) == 1 ||
                post.datumPorudzbine.toLowerCase().includes(this.search.toLowerCase()) == 1)
        }
    },
    template: `
<p class="lil sizes"><b>-{{naslov}}</b></p>
<input class="form-control me-2" type="text" v-model="search" placeholder="Search" />

<table class="table table-success table-striped">
<thead>
    <tr>
        <th>ID-Iznajmljivanje</th>
        <th>ID-Kupac</th>
        <th>ID-Knjiga</th>
        <th>Količina</th>
        <th>Način plaćanja</th>
        <th>Valuta</th>
        <th>Period iznajmljivanja</th>
        <th>Datum porudžbine</th>
        <th>Akcije</th>
    </tr>
</thead>
<tbody>
    <tr v-for="iznajmiti in pronadjenikorisnici" :key="iznajmljivanje.IDIznajmljivanje">
        <td>{{iznajmiti.IDIznajmljivanje}}</td>
        <td>{{iznajmiti.IDKupac}}</td>
        <td>{{iznajmiti.IDKnjiga}}</td>
        <td>{{iznajmiti.kolicina}}</td>
        <td>{{iznajmiti.nacinPlacanja}}</td>
        <td>{{iznajmiti.valuta}}</td>
        <td>{{iznajmiti.periodIznajmljivanja}}</td>
        <td>{{iznajmiti.datumPorudzbine}}</td>
        <td><button class="btn btn-danger me-3" v-on:click="$emit('uklanjanje', iznajmiti.IDIznajmljivanje)">Ukloni</button>
            <button class="btn btn-info" v-on:click="$emit('izmena', {...iznajmiti})">Izmena</button>
        </td>
    </tr>
</tbody>
</table>
    `
}