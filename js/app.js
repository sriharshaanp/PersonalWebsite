(function(){
  const yearEl = document.getElementById('year');
  yearEl.textContent = new Date().getFullYear();

  // Sample content data. Replace or extend this list.
  const aboutText = `I am an interdisciplinary researcher and media artist working on creative computation, interaction, and media practice. Edit this text in js/app.js.`;

  const memberships = [
    {title:'ACM Member', org:'ACM', certUrl:'assets/certs/cert-acm.svg'},
    {title:'IEEE Member', org:'IEEE', certUrl:'assets/certs/cert-ieee.svg'}
  ];

  const judging = [
    {id:'j1', title:'Conference X - Reviewer', year:2023, certImg:'assets/certs/cert-judging1.svg', pics:['assets/images/sample-art1.svg']},
    {id:'j2', title:'Festival Y - Jury', year:2024, certImg:'assets/certs/cert-judging2.svg', pics:['assets/images/sample-art2.svg']}
  ];

  const publications = [
    {title:'Paper A', citation:'Author, Title, Venue, 2021', url:'https://doi.org/10.0000/example'},
    {title:'Paper B', citation:'Author, Title, Venue, 2022', url:'https://arxiv.org/'}
  ];

  const media = [
    {title:'Interview on X', outlet:'News X', url:'https://example.com/article1'},
    {title:'Feature on Y', outlet:'Magazine Y', url:'https://example.com/article2'}
  ];

  // Render About
  document.getElementById('about-text').textContent = aboutText;

  // Render Memberships
  const mGrid = document.getElementById('memberships-grid');
  memberships.forEach(m=>{
    const card = document.createElement('div');card.className='card';
    const h = document.createElement('h3');h.textContent = m.title + ' — ' + m.org;
    const a = document.createElement('a');a.href = m.certUrl;a.target='_blank';a.rel='noopener';a.className='btn';a.textContent='View Certificate';
    card.appendChild(h);card.appendChild(a);mGrid.appendChild(card);
  })

  // Modal helpers
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal-body');
  const modalClose = document.getElementById('modal-close');
  function openModal(){modal.setAttribute('aria-hidden','false')}function closeModal(){modal.setAttribute('aria-hidden','true');modalBody.innerHTML=''}
  modalClose.addEventListener('click',closeModal);
  modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});

  // Render Judging
  const jGrid = document.getElementById('judging-grid');
  judging.forEach(item=>{
    const card = document.createElement('div');card.className='card';
    const h = document.createElement('h3');h.textContent = item.title + ' ('+item.year+')';
    const btn = document.createElement('button');btn.className='btn';btn.textContent='Open Details';
    btn.addEventListener('click',()=>{
      modalBody.innerHTML = '';
      const cert = document.createElement('img');cert.className='cert-preview';cert.src = item.certImg;cert.alt='Certificate';
      modalBody.appendChild(cert);

      // show any sample pictures already associated
      if(item.pics && item.pics.length){
        const sampleGrid = document.createElement('div');sampleGrid.style.display='grid';sampleGrid.style.gridTemplateColumns='repeat(auto-fit,minmax(120px,1fr))';sampleGrid.style.gap='8px';sampleGrid.style.marginTop='12px';
        item.pics.forEach(p=>{
          const img = document.createElement('img');img.src=p;img.style.width='100%';img.style.height='auto';img.style.border='1px solid #ddd';img.style.borderRadius='4px';sampleGrid.appendChild(img);
        })
        modalBody.appendChild(sampleGrid);
      }

      const uploader = document.createElement('div');
      uploader.style.marginTop='12px';
      const label = document.createElement('label');label.textContent='Upload pictures (they will only be stored locally in your browser): ';label.style.display='block';
      const input = document.createElement('input');input.type='file';input.multiple=true;input.accept='image/*';

      const gallery = document.createElement('div');gallery.style.display='grid';gallery.style.gridTemplateColumns='repeat(auto-fit,minmax(120px,1fr))';gallery.style.gap='8px';gallery.style.marginTop='10px';

      input.addEventListener('change',ev=>{
        gallery.innerHTML='';
        Array.from(ev.target.files).forEach(file=>{
          const reader = new FileReader();
          reader.onload = e => {
            const img = document.createElement('img');img.src = e.target.result;img.style.width='100%';img.style.height='auto';img.style.border='1px solid #ddd';img.style.borderRadius='4px';gallery.appendChild(img);
          };
          reader.readAsDataURL(file);
        })
      })

      uploader.appendChild(label);uploader.appendChild(input);modalBody.appendChild(uploader);modalBody.appendChild(gallery);
      openModal();
    });
    card.appendChild(h);card.appendChild(btn);jGrid.appendChild(card);
  })

  // Render Publications
  const pubList = document.getElementById('publications-list');
  publications.forEach(p=>{
    const li = document.createElement('li');
    const a = document.createElement('a');a.href=p.url;a.target='_blank';a.rel='noopener';a.textContent = p.citation;
    li.appendChild(a);pubList.appendChild(li);
  })

  // Render Media
  const mediaList = document.getElementById('media-list');
  media.forEach(m=>{
    const li = document.createElement('li');
    const a = document.createElement('a');a.href=m.url;a.target='_blank';a.rel='noopener';a.textContent = `${m.title} — ${m.outlet}`;
    li.appendChild(a);mediaList.appendChild(li);
  })

})();
