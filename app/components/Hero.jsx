import React from 'react';
import {
  StyledHeroContainer,
  StyledHeroText,
  StyledHeroSubtext,
} from './hero.styles';
import AssetStore from '../../lib/AssetStore';
import LazyBackground from './LazyBackground'


const HERO_DATA = {
  '/program-overview/introduction': {
    src: 'assets/images/program-overview-hero.png',
    text: 'Program Overview',
  },
  '/program-overview/12-chinese-flagships': {
    src: 'assets/images/program-overview-12-chinese-flagships-hero.png',
    text: 'The Twelve Chinese Flagship',
  },
  '/program-overview/calendar': {
    src: 'assets/images/cal.jpg',
	placeholder: 'assets/images/cal-temp.jpg',
    text: 'Calendar',
  },
  '/program-overview/estimated-costs': {
    src: 'assets/images/program-estimated-costs-hero.png',
	placeholder: 'assets/images/program-estimated-costs-hero-temp.jpg',
    text: 'Estimated Costs',
  },
  '/program-overview/orientation-information': {
    src: 'assets/images/orientation.jpg',
	placeholder: 'assets/images/orientation-compressed.jpg',
    text: 'Orientation Information',
  },
  '/academics/introduction': {
    src: 'assets/images/teacher.jpg',
	placeholder: 'assets/images/teacher.jpg',
    text: 'Academics',
    subtext: 'The structure of the Taiwan Capstone Year has been thoughtfully designed to help Flagship students reach their academic and professional goals.',
  },
  '/academics/tutoring-support': {
    src: 'assets/images/tutoring.jpg',
	placeholder: 'assets/images/tutoring-temp.jpg',
    text: 'Tutoring Support',
  },
  '/academics/educational-excursions': {
    src: 'assets/images/excursions.jpg',
	placeholder: 'assets/images/excursions.jpg',
    text: 'Educational Excursions',
    subtext: 'Students participate in educational and cultural learning excursions once per semester.',
  },
  '/academics/certifications': {
    src: 'assets/images/certifications.jpg',
	placeholder: 'assets/images/certifications-temp.jpg',
    text: 'Certifications',
  },
  '/academics/credits-transcript': {
    src: 'assets/images/credits.jpg',
	placeholder: 'assets/images/credits-temp.jpg',
    text: 'Credits & Transcripts',
  },
  '/internship/introduction': {
    src: 'assets/images/intern.jpg',
	placeholder: 'assets/images/intern-temp.png',
    text: 'Internship',
  },
  '/internship/application-process': {
    src: 'assets/images/process2.jpg',
	placeholder: 'assets/images/process2-temp.jpg',
    text: 'Application Process',
  },
  '/internship/placement': {
    src: 'assets/images/placement.jpg',
	placeholder: 'assets/images/placement-temp.jpg',
    text: 'Placement',
  },
  '/student-life': {
    src: 'assets/images/student-life-compressed.png',
	placeholder: 'assets/images/student-life-compressed.png',
    text: 'Student Life',
  },
  '/yang-ming-university/introduction': {
    src: 'assets/images/nymu-home.png',
    placeholder: 'assets/images/nymu-home-compressed.png',
    text: 'National Yang-Ming University',
  },
  '/yang-ming-university/housing-options': {
    src: 'assets/images/housing-hero.png',
	placeholder: 'assets/images/housing-hero-compressed.png',
    text: 'Housing',
  },
  '/contact/team': {
    src: 'assets/images/meet-team.png',
	placeholder: 'assets/images/meet-team-compressed.png',
    text: 'Meet Our Team',
  },
  '/contact/form': {
    src: 'assets/images/new-team.png',
	placeholder: 'assets/images/new-team-compressed.png',
    text: 'Contact Us',
  },
};

class Hero extends React.Component {
  render() {
    const {
      route,
    } = this.props;
    const src = HERO_DATA[route] && HERO_DATA[route].src;
	const placeholder = HERO_DATA[route] && HERO_DATA[route].placeholder;
    const text = HERO_DATA[route] && HERO_DATA[route].text;
    const subtext = HERO_DATA[route] && HERO_DATA[route].subtext;

    return (
      <StyledHeroContainer>
		<LazyBackground placeholder={AssetStore.get(placeholder)} src={AssetStore.get(src)} >  
        <StyledHeroText>
          {text}
          {subtext ? (
            <StyledHeroSubtext>
              {subtext}
            </StyledHeroSubtext>
          ) : null}
        </StyledHeroText>
			</LazyBackground>
      </StyledHeroContainer>
    );
  }
}

export default Hero;
