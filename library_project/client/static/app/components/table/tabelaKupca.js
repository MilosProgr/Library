export default {
    props: ["kupci", "naslov"],
    emits:["izmena", "uklanjanje"],

    data(){
        return{
            search: ""
        }
    },
    computed: {
        pronadjeniKorisnici(){
            return this.kupci.filter(post =>
                post.IDKupac === Number(this.search) ||
                post.ime.toLowerCase().includes(this.search.toLowerCase()) == 1 ||
                post.prezime.toLowerCase().includes(this.search.toLowerCase()) == 1 ||
                post.datumRodjenja.toLowerCase().includes(this.search.toLowerCase()) == 1  || //posto je datum u obliku todatestring formata koji prikazuje datum u obliku stringa onda mozemo da nadjemo u search kucanjem slova,isto i za ISOformat
                post.email.toLowerCase().includes(this.search.toLowerCase()) == 1 ||
                post.telefon.toLowerCase().includes(this.search.toLowerCase()) == 1 || //telefon je u bazi definisan kao varchar a ne kao int pa zato ga filtriramo u obliku stringa
                post.mesto.toLowerCase().includes(this.search.toLowerCase()) == 1 ||
                post.adresa.toLowerCase().includes(this.search.toLowerCase()) == 1)

                
        }
    },
    template: `
<p class="lil sizes"><b>-{{naslov}}</b></p>
<input class="form-control me-2" type="text"  v-model="search"  placeholder="Search" />

<table class="table table-success table-striped">
<thead>
    <tr>
        <th>ID-Kupac</th>
        <th>Ime</th>
        <th>Prezime</th>
        <th>Datum rođenja</th>
        <th>E-mail</th>
        <th>Telefon</th>
        <th>Mesto</th>
        <th>Adresa</th>
        <th>Akcije</th>
    </tr>
</thead>
<tbody>
    <tr v-for="kupac in pronadjeniKorisnici" :key="kupci.IDKupac">
        <td>{{kupac.IDKupac}}</td>
        <td>{{kupac.ime}}</td>
        <td>{{kupac.prezime}}</td>
        <td>{{kupac.datumRodjenja}}</td>
        <td>{{kupac.email}}</td>
        <td>{{kupac.telefon}}</td>
        <td>{{kupac.mesto}}</td>
        <td>{{kupac.adresa}}</td>
        <td><button class="btn btn-danger me-3" v-on:click="$emit('uklanjanje', kupac.IDKupac)">Ukloni</button>
            <button class="btn btn-info" v-on:click="$emit('izmena', {...kupac})">Izmena</button>
        </td>
    </tr>
</tbody>
</table>
    `
}