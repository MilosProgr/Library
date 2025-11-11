export default {
    props: ["biblioteke", "naslov"],
    emits:["izmena", "uklanjanje"],

    data(){
        return{
            search: ""
        }
    },
    computed: {
        pronadjeniElementi(){
            return this.biblioteke.filter(post =>
                post.id === Number(this.search) ||
                post.naziv.toLowerCase().includes(this.search.toLowerCase()) == 1 ||
                post.adresa.toLowerCase().includes(this.search.toLowerCase()) == 1 ||
                post.telefon.toLowerCase().includes(this.search.toLowerCase()) == 1  ||
                post.email.toLowerCase().includes(this.search.toLowerCase()) == 1)
        }
    },
    template: `
<p class="lil sizes"><b>-{{naslov}}</b></p>
<input class="form-control me-2" type="text" v-model="search" placeholder="Search" />

<table class="table table-success table-striped">
<thead>
    <tr>
        <th>ID</th>
        <th>Naziv</th>
        <th>Adresa</th>
        <th>Telefon</th>
        <th>E-mail</th>
        <th>Akcije</th>
    </tr>
</thead>
<tbody>
    <tr v-for="biblioteka in pronadjeniElementi" :key="biblioteke.id">
        <td>{{biblioteka.id}}</td>
        <td>{{biblioteka.naziv}}</td>
        <td>{{biblioteka.adresa}}</td>
        <td>{{biblioteka.telefon}}</td>
        <td>{{biblioteka.email}}</td>
        <td><button class="btn btn-danger me-3" v-on:click="$emit('uklanjanje', biblioteka.id)">Ukloni</button>
            <button class="btn btn-info" v-on:click="$emit('izmena', {...biblioteka})">Izmena</button>
        </td>
    </tr>
</tbody>
</table>
    `
}