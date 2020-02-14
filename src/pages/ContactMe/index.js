import React from 'react';
import { ContactMeInner, BiographyInfo, BiographyInfoItem, BiographyInfoItemTitle, BiographyInfoItemContent, BiographyInfoLine, SocialMediaArea, SocialMediaAreaInner } from '../../Styled';
import { LinkdinIcon, GithubIcon, TelegarmIcon } from '../../Icons';
import store from '../../Store';


export default class ContactMe extends React.Component {
    constructor(props) {
        super(props);
        store.reset();
    }
    render() {
        return <ContactMeInner>
            <BiographyInfo>
                <BiographyInfoItem>
                    <BiographyInfoItemTitle >
                        Phone Number
                    </BiographyInfoItemTitle>
                    <BiographyInfoLine />
                    <BiographyInfoItemContent>
                        09016126859
                    </BiographyInfoItemContent>
                </BiographyInfoItem>
                <BiographyInfoItem>
                    <BiographyInfoItemTitle >
                        Gmail
                    </BiographyInfoItemTitle>
                    <BiographyInfoLine />
                    <BiographyInfoItemContent>
                        arminyahyaa@gmail.com
                    </BiographyInfoItemContent>
                </BiographyInfoItem>
            </BiographyInfo>

            <SocialMediaArea>
                <SocialMediaAreaInner>
                    <a href="https://t.me/ArminYahya" style={{ color: '#fff' }}>

                        <TelegarmIcon />
                    </a>

                    <a href="https://linkedin.com/in/ArminYahya/" style={{ color: '#fff' }}>

                        <LinkdinIcon />
                    </a>

                    <a href="https://github.com/arminyahya" style={{ color: '#fff' }}>

                        <GithubIcon />
                    </a>
                </SocialMediaAreaInner>
            </SocialMediaArea>
        </ContactMeInner>
    }
}