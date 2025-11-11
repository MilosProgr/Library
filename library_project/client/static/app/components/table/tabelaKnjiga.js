export default {
    props: ["knjige", "naslov"],
    emits:["izmena", "uklanjanje"],

    data(){
        return{
            search: ""
        }
    },
    methods: {
        stanje(stanje){
            if (stanje == 'NE'){
                return "red"
            }
            else if(stanje == 'DA'){
                return "green"
            }
        }
    },
    computed:{
        pronadjeniElementi(){

            return this.knjige.filter(post =>
                post.IDKnjiga === Number(this.search) ||
                post.naziv.toLowerCase().includes(this.search.toLowerCase()) == 1 ||
                post.autor.toLowerCase().includes(this.search.toLowerCase()) == 1 ||
                post.kategorija.toLowerCase().includes(this.search.toLowerCase()) == 1 ||
                post.cena === Number(this.search) || //posto je floating nece naci vrednost ukoliko ne unesemo do kraja
                post.stanje.toLowerCase().includes(this.search.toLowerCase()) == 1 ||
                post.biblioteka_id === Number(this.search))

                
        }

    },
    template: `
<p class="lil sizes"><b>-{{naslov}}</b></p>
<input class="form-control me-2" type="text" v-model="search" placeholder="Search" />
<table class="table table-success table-striped">
<thead>
    <tr>
        <th>ID-Knjiga</th>
        <th>Naziv</th>
        <th>Autor</th>
        <th>Kategorija</th>
        <th>Cena</th>
        <th>Stanje</th>
        <th>Bibliteka ID</th>
        <th>Akcije</th>
    </tr>
</thead>
<tbody>
    <tr v-for="knjiga in pronadjeniElementi" :key="knjige.IDKnjiga">
        <td>{{knjiga.IDKnjiga}}</td>
        <td>{{knjiga.naziv}}</td>
        <td>{{knjiga.autor}}</td>
        <td>{{knjiga.kategorija}}</td>
        <td>{{knjiga.cena}}</td>
        <td v-bind:class="stanje(knjiga.stanje)">{{knjiga.stanje}}</td>
        <td>{{knjiga.biblioteka_id}}</td>
        <td><button class="btn btn-danger me-3" v-on:click="$emit('uklanjanje', knjiga.IDKnjiga)">Ukloni</button>
            <button class="btn btn-info" v-on:click="$emit('izmena', {...knjiga})">Izmena</button>
        </td>
    </tr>
</tbody>
</table>
    `
}