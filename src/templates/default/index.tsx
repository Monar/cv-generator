import * as React from 'react';
// import * as ReactDOM from 'react-dom';
// import { Global, CSSObject } from '@emotion/core';
import styled from '@emotion/styled';

import { Template as TemplateType } from '../../types';

{
  /* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> */
}
{
  /* <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet"> */
}

export const Template: TemplateType = ({ data }) => {
  return (
    <>
      <Portrait>{/* <img src={data.photo} /> */}</Portrait>
      <Top>
        <Title>{data.title}</Title>
        <Name>{data.name}</Name>
      </Top>

      <Left>
        <SideItem>
          <i className="icon fa fa-envelope-o" />
          <a href={`mailto:${data.email}`}> {data.email} </a>
        </SideItem>

        <SideItem>
          <i className="icon fa fa-phone" />
          <a href={`tel:${data.phone}`}> {data.phone}</a>
        </SideItem>

        <SideItem>
          {data.profiles.map(profile => (
            <div key={profile.network}>
              {profile.icon ? (
                <i className={`icon fa fa-${profile.icon.toLowerCase()}`} />
              ) : (
                <div className="icon"> {profile.network} </div>
              )}
              <a target="_blank" rel="noreferrer" href={profile.url}>
                {profile.username}
              </a>
            </div>
          ))}
        </SideItem>

        {/* <SideItem> */}
        {/*   <h3>Skills</h3> */}
        {/*   {% for skill in skills %} */}
        {/*   <li class="skill"> */}
        {/*     {{ skill }} */}
        {/*   </li> */}
        {/*   {% endfor %} */}
        {/* <SideItem> */}

        {/* <SideItem> */}
        {/*   <h3>Interests</h3> */}
        {/*   {% for interest in interests %} */}
        {/*   <li class="interest"> */}
        {/*     {{ interest }} */}
        {/*   </li> */}
        {/*   {% endfor %} */}
        {/* <SideItem> */}

        {/* <SideItem> */}
        {/*   <h3>Education</h3> */}
        {/*   {% for university in education %} */}
        {/*   <li class="university"> */}
        {/*       <span class="block name"> {{ university.university }} </span> */}
        {/*     <ul> */}
        {/*       {% if university.faculty %} */}
        {/*       <li class="faculty"> */}
        {/*         <span class="block">{{ university.faculty }} </span> */}
        {/*       </li> */}
        {/*       {% endif %} */}
        {/*       <li class="area"> */}
        {/*         <span class="block"> {{ university.area }} </span> */}
        {/*       </li> */}
        {/*       <li> */}
        {/*         <span class="period"> */}
        {/*           {{ university.period }} */}
        {/*         </span> */}
        {/*       </li> */}
        {/*     </ul> */}
        {/*   </li> */}
        {/*   {% endfor %} */}
        {/* </ul> */}
        {/* </SideItem> */}
      </Left>

      {/* <div id="right"> */}
      {/*   <div class="employment"> */}
      {/*     <h2>Employment</h2> */}
      {/*     {% for job in work %} */}
      {/*     <div class="job"> */}
      {/*       <div class="company"> */}
      {/*         {{ job.company }} */}
      {/*       </div> */}
      {/*       <div class="period"> */}
      {/*         {{ job.startDate }} - {{ job.endDate }} */}
      {/*       </div> */}
      {/*       <div class="position"> */}
      {/*         {{ job.position }} */}
      {/*       </div> */}
      {/*       <div class="description"> */}
      {/*         {{ job.description }} */}
      {/*       </div> */}
      {/*       {% if job.buzzwords %} */}
      {/*       <div class="buzzwords"> */}
      {/*         {{ job.buzzwords }} */}
      {/*       </div> */}
      {/*       {% endif %} */}
      {/*     </div> */}
      {/*     {% endfor %} */}
      {/*   </div> */}
      {/* </div> */}

      <footer>
        I hereby give consent for my personal data included in the application
        to be processed for the purposes of the recruitment process in
        accordance with Art. 6 paragraph 1 letter a of the Regulation of the
        European Parliament and of the Council (EU) 2016/679 of 27 April 2016 on
        the protection of natural persons with regard to the processing of
        personal data and on the free movement of such data, and repealing
        Directive 95/46/EC (General Data Protection Regulation).
      </footer>
    </>
  );
};

const Portrait = styled('div')({
  gridRow: 1,
  gridColumn: 1,
  display: 'flex',
  justifyContent: 'center',
  clipPath: 'circle(70px at center)',
  img: {
    height: '100%',
  },
});

const Top = styled('div')({
  gridRow: 1,
  gridColumn: 2,
  alignSelf: 'center',
  justifySelf: 'center',
});

const Title = styled('div')({
  fontSize: '24px',
});

const Name = styled('div')({
  fontSize: '36px',
  fontSeight: 'bold',
});

const Left = styled('div')({
  gridRow: 2,
  gridColumn: 1,
  paddingTop: '.8cm',
});

const SideItem = styled('div')({
  padding: '.15cm 0',
  '& > li > ul': {
    padding: '0.2cm',
    listStylePosition: 'inside',
  },
});
