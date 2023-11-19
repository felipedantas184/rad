import { Slide } from "react-awesome-reveal"
import { Wrapper } from "../Elements/containers"
import { Perk, PerkHero, PerkParagraph, PerkTitle, PerkWrapper, PerksContainer, PerksSB } from "./styles"
import { FaHelicopter, FaPlane, FaPlaneDeparture } from "react-icons/fa"


const Perks = () => {
  return (
    <PerksContainer>
      <Wrapper>
        <PerkWrapper>
          <Perk>
            <Slide direction="up" triggerOnce>
              <PerksSB style={{ padding: 0, marginBottom: 4 }} >
                <PerkHero>+20</PerkHero>
                <FaPlane size={32} color={'#33333A'} />
              </PerksSB>
              <PerkTitle>Aeródromos Registrados</PerkTitle>
              <PerkParagraph>Todos os aeródromos devidamente registrados e certificados pela ANAC</PerkParagraph>
            </Slide>
          </Perk>
          <Perk>
            <Slide direction="up" triggerOnce>
              <PerksSB style={{ padding: 0, marginBottom: 4 }} >
                <PerkHero>+15</PerkHero>
                <FaHelicopter size={32} color={'#33333A'} />
              </PerksSB>
              <PerkTitle>Helipontos Registrados</PerkTitle>
              <PerkParagraph>Helipontos certificados pela ANAC e em concordância com as normas</PerkParagraph>
            </Slide>
          </Perk>
          <Perk>
            <Slide direction="up" triggerOnce>
              <PerksSB style={{ padding: 0, marginBottom: 4 }} >
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', gap: 4 }}>
                  <PerkHero>+10</PerkHero>
                  <PerkTitle>anos</PerkTitle>
                </div>
                <FaPlaneDeparture size={32} color={'#33333A'} />
              </PerksSB>
              <PerkTitle>Experiência</PerkTitle>
              <PerkParagraph>São mais de 10 anos de experiência dentro do ambiente da aviação</PerkParagraph>
            </Slide>
          </Perk>
        </PerkWrapper>
      </Wrapper>
    </PerksContainer>
  )
}

export default Perks