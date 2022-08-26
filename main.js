const LinksRedeSocial = {   
    github : 'XxCauexX',
    youtube : 'channel/UC2SXvCO30VoD047XSYdjv3A/editing/details',
    instagram : '_caue.art',
    twitter : 'Caue25001578',
    facebook : 'caue.andrade.505'

}

function AbrirLinksRedeSocial(){
   for (let li of SocialLinks.children){
      const social = li.getAttribute ('class')
     li.children[0].href = `https://${social}.com/${LinksRedeSocial[social]}`
     


      
   }        
}
AbrirLinksRedeSocial()

//pegando informações de usuario do github
function getGitHubProfileInfos(){
    const url = `https://api.github.com/users/${LinksRedeSocial.github}`
    
    fetch (url)
    .then(response => response.json())
    .then(data => {   
        Name.textContent = data.name
        userBio.textContent = data.bio
        userLink.href = data.html_url
        imagePerfil.src = data.avatar_url
        userLogin.textContent = data.login

    })

    
    
}
getGitHubProfileInfos()
