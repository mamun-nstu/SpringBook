let contac_list = [
    {img_src: "profile-photo.jpg", username: "Abdullah Al - Mamun"},
    {img_src: "profile-photo.jpg", username: "Zubayer Ahmed"},
    {img_src: "profile-photo.jpg", username: "Rikibul Islam"},
    {img_src: "profile-photo.jpg", username: "Md. Arefin Tushar"},
    {img_src: "profile-photo.jpg", username: "Abdullah Al - Mamun"},
    {img_src: "profile-photo.jpg", username: "Zubayer Ahmed"},
    {img_src: "profile-photo.jpg", username: "Rikibul Islam"},
    {img_src: "profile-photo.jpg", username: "Md. Arefin Tushar"},
    {img_src: "profile-photo.jpg", username: "Abdullah Al - Mamun"},
    {img_src: "profile-photo.jpg", username: "Zubayer Ahmed"},
    {img_src: "profile-photo.jpg", username: "Rikibul Islam"},
    {img_src: "profile-photo.jpg", username: "Md. Arefin Tushar"}
];

for(let i=0; i<contac_list.length; i++){
    
    let a = document.createElement('a');
    let img = document.createElement('img');
    img.src = contac_list[i].img_src;
    img.id='contact-list-profile';
    a.appendChild(img);
    let span = document.createElement('span');
    span.innerText = contac_list[i].username;
    a.appendChild(span);

    document.getElementById('contact-list').appendChild(a);
}



// -------------------------------------  user's post section ----------------------------------------//


let msg = document.getElementById('write-post');
let post_btn = document.querySelector('#post');

post_btn.addEventListener('click', ()=>{
    if(msg.value){
        pn = localStorage.getItem('pn') || '0';
        pt = localStorage.getItem('pt') || '0';
        pt = parseInt(pt);
        pn = parseInt(pn);
        let post_number = 'post';
        let post_time = 'time';
        post_number = post_number+pn;
        post_time = post_time+pt;
        pt+=1;
        pn+=1;
        localStorage.setItem('pn', pn);
        localStorage.setItem('pt', pt);

        const date = new Date();
        const n = date.toDateString();
        const t = date.toLocaleTimeString();
        const post_tm = t + ', ' + n;

        localStorage.setItem(post_number,msg.value);
        localStorage.setItem(post_time,post_tm);
        console.log("post number : ",post_number);
    } else{
        window.alert("please write something to show in your timeline");
    }
});

pn = localStorage.getItem('pn') || '0';
pn = parseInt(pn);

for(let i=pn-1; i>=0; i--){
    let post_number = 'post';
    post_number = post_number+i;
    let post_time = 'time';
    post_time = 'time'+i;
    
    let post_list = document.createElement('div');
    post_list.id = 'post_list';

    let post_username_field = document.createElement('div');
    post_username_field.id = 'post-username-field';
    post_list.appendChild(post_username_field);

    let img = document.createElement('img');
    img.id='post-list-profile';
    img.src='profile-photo.jpg';
    post_username_field.appendChild(img);
    
    let post_user_info = document.createElement('div');
    post_user_info.id = 'post-user-info';
    post_user_info.style.fontSize = '.80em';

    let p_name =  document.createElement('p');
    p_name.innerText = 'Abdullah Al - Mamun';
    p_name.style.fontWeight = 'bold';

    let p_time =  document.createElement('p');
    let ttt = localStorage.getItem(post_time)
    p_time.innerText = ttt;
    p_time.style.cssText += 'color: grey; margin-top:3px';

    post_user_info.appendChild(p_name);
    post_user_info.appendChild(p_time);
    post_username_field.appendChild(post_user_info);

    let p = document.createElement('p');
    if(localStorage.getItem(post_number).includes('data:image')){
        let img = document.createElement('img');
        img.src = localStorage.getItem(post_number);
        img.style.cssText+="height: 600px; width:100%";
        p.appendChild(img);
    } else{
        p.innerText = localStorage.getItem(post_number);
    }
    p.style.marginTop="10px"
    post_list.appendChild(p);
    document.getElementById('main-content').appendChild(post_list);
}


// ------------------------------ user's image/vieo upload section --------------------------//


let imgVidBtn = document.getElementById('post-image-video');
imgVidBtn.addEventListener('click', ()=>{
    let choosefile = document.getElementById('choosefile');
    if(choosefile.style.display === "none"){
        choosefile.style.display="block";
    } else{
        choosefile.style.display="none";
    }
});


let choosefileinput = document.querySelector('#choosefile-input');
document.getElementById('choosefile-input').addEventListener("change", function(){
    const reader = new FileReader();
    reader.readAsDataURL(this.files[0]);
    console.log("this.files[0] checked");
    reader.addEventListener("load", ()=>{
        console.log(reader.result);
        if(reader.result){
            let uploadbtn = document.getElementById('upload');
            uploadbtn.style.cssText+="display: block";
            uploadbtn.addEventListener('click', ()=>{
                let pn = localStorage.getItem('pn') || '0';
                let pt = localStorage.getItem('pt') || '0';
                pt = parseInt(pt);
                pn = parseInt(pn);
                let post_number = 'post';
                let post_time = 'time';
                post_number = post_number+pn;
                post_time = post_time+pt;
                pt+=1;
                pn+=1;
                localStorage.setItem('pn', pn);
                localStorage.setItem('pt', pt);
        
                const date = new Date();
                const n = date.toDateString();
                const t = date.toLocaleTimeString();
                const post_tm = t + ', ' + n;
        
                localStorage.setItem(post_time,post_tm);
                localStorage.setItem(post_number, reader.result);
            });
        }
    });
});