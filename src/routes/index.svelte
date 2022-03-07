<script>
    import Title from '$lib/title.svelte'
</script>

<Title/>

<div class="index">
    <h2>Welcome</h2>
</div>

<div>
    <ul>
        <li><a href="/guides">Guides</a></li>
        <li><a href="/about">About</a></li>
    </ul>
</div>

<style>
    .index{
        text-align: center;
        display: block;
        margin: 20px auto;
        color: salmon;
        background-color: rgb(109, 100, 161);
    }
    ul{
        list-style-type: none;
        margin-right: 95%;
        padding: 0;
        color: salmon;
    }
    
</style>