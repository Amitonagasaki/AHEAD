import Image from 'next/image'
import BeBestYou from '@/components/BeBestYou'
import Navbar from '@/components/Navbar'
import MasterLife from '@/components/MasterLife'
import EQbeatsIQ from '@/components/EQbeatsIQ'
import DoesThisSoundsFamiliar from '@/components/DoesThisSoundFamiliar'
import MeetAheadCard from '@/components/MeetAheadCard'
import SelfImprovement from '@/components/SelfImprovement'
import EverWonder from '@/components/EverWonder'
import Test from '@/components/Test'
import WorkWithUs from '@/components/WorkWithUs'
import OpenVacancies from '@/components/Openvacancies'
import Footer from '@/components/Footer'

export default function Home(){
    return(
        <>
        <Navbar/>
        <MasterLife/>
        <EQbeatsIQ/>
        <DoesThisSoundsFamiliar/>
        <MeetAheadCard/>
        <SelfImprovement/>
        <BeBestYou/>
        <EverWonder/>
        <Test/>
        <WorkWithUs/>
        <OpenVacancies/>
        <Footer/>
        </>
    );
}