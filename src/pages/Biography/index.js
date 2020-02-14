import React from 'react';
import { BiographyInner, BiographyInfo, BiographyInfoItem, BiographyInfoItemTitle, BiographyInfoItemContent, BiographyInfoLine, BiographySkill, BiographySkillsWrap } from '../../Styled';
import { JsIcon, ReduxIcon, SassIcon, NodeIcon, GatsbyIcon, GitIcon, AntIcon, GraphqlIcon, RestIcon, TypescriptIcon, MobxIcon, ReactIcon } from '../../Icons';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import AnimatedProgressProvider from './AnimatedProgressProvider'
import { easeLinear } from "d3-ease";

export default class Biography extends React.Component {

    biographyInfo = React.createRef();

    componentDidMount() {
        console.log('Biography-componentDidMount')
        requestAnimationFrame(() => {
            window.scrollTo(0, this.biographyInfo.current.offsetTop)
        }, 0);
    }


    render() {
        return <BiographyInner>

            <BiographyInfo ref={this.biographyInfo}>
                <BiographyInfoItem>
                    <BiographyInfoItemTitle >
                        Birth Date
                    </BiographyInfoItemTitle>
                    <BiographyInfoLine />
                    <BiographyInfoItemContent>
                        1998-09-04
                    </BiographyInfoItemContent>
                </BiographyInfoItem>
                <BiographyInfoItem>
                    <BiographyInfoItemTitle>
                        Education
                    </BiographyInfoItemTitle>
                    <BiographyInfoLine />
                    <BiographyInfoItemContent>
                        Islamic Azad University-South Tehran
                    </BiographyInfoItemContent>
                </BiographyInfoItem>
                <BiographyInfoItem>
                    <BiographyInfoItemTitle>
                        Location
                    </BiographyInfoItemTitle>
                    <BiographyInfoLine />
                    <BiographyInfoItemContent>
                        <span>Iran-Tehran</span>
                    </BiographyInfoItemContent>
                </BiographyInfoItem>
            </BiographyInfo>

            <BiographySkillsWrap>
                <Skill name="Javascript" percent={90} icon={JsIcon} />
                <Skill name="Reactjs" percent={90} icon={ReactIcon} />
                <Skill name="Sass" percent={100} icon={SassIcon} />
                <Skill name="Mobx" percent={100} icon={MobxIcon} />
                <Skill name="Redux" percent={60} icon={ReduxIcon} />
                <Skill name="Restful Api" percent={100} icon={RestIcon} />
                <Skill name="Graphql" percent={60} icon={GraphqlIcon} />
                <Skill name="Ant Design" percent={80} icon={AntIcon} />
                <Skill name="Typescript" percent={80} icon={TypescriptIcon} />
                <Skill name="Git" percent={100} icon={GitIcon} />
                <Skill name="Gatsby" percent={80} icon={GatsbyIcon} />
                <Skill name="Node" percent={80} icon={NodeIcon} />
                <BiographySkill><div style={{ width: '25%' }} /></BiographySkill>
                <BiographySkill><div style={{ width: '25%' }} /></BiographySkill>
            </BiographySkillsWrap>
        </BiographyInner>
    }
}


const ProgressProvider = ({ valueStart, valueEnd, children }) => {
    const [value, setValue] = React.useState(valueStart);
    React.useEffect(() => {

        setValue(valueEnd);
    }, [valueEnd]);

    return children(value);
};

export function Skill({ name, percent, icon: Icon }) {
    return (
        <BiographySkill>
            <div style={{ width: 100 }}>
                <AnimatedProgressProvider
                    valueStart={0}
                    valueEnd={percent}
                    duration={2}
                    easingFunction={easeLinear}
                    repeat={false}
                >
                    {(value) => (<CircularProgressbarWithChildren className="skill-percent" value={value} strokeWidth={2} duration={10}>
                        <Icon />
                    </CircularProgressbarWithChildren>)
                    }
                </AnimatedProgressProvider>
            </div>
            <span style={{ color: '#fff', marginTop: 10 }}>{name}</span>
            <span style={{ color: '#E94541', margin: 0 }}>{percent}%</span>
        </BiographySkill>
    );
}