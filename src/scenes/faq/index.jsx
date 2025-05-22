import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import {Typography} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FaQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
    <Box m="20px">
        <Header title="FAQ" subtitle="Welcome to our FAQ"/>
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography color={colors.redAccent[400]} variant="h4">
                Some take on the new mappool
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    This is the worst map in the history, the worst song, the worst map, the worst-like-uh-
                    dude like, this is just, like what the hell is this? Dude everytime I like- I randomly click on
                    cookiezi stream i see him playing that map it makes me like wanna blow my brain out in
                    fortnite, ya know, with the pump shotgun? It's so annoying. Like what is wrong with him? He has
                    to be so brain damage to play that. And then I just instantly click off his stream, thats just like,
                    and then i'll go and check reddit and they'll be like "oh my god he did this like crazy score", and
                    then i'll tune into his stream and then he'll be playing this stupid butt annoying pee dough file map.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography color={colors.redAccent[400]} variant="h4">
                Mrekk
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Mrekk is literally gojo satoru from jujutsu kaisen. Notice how every time someone gets close to him, they just seem to slow down? 
                    This is just like gojo satoru’s infinity. The closer someone gets to mrekk, the farther and farther away they become. The gap between mrekk and me may look large, but the gap between mrekk and akolibed is completely insurmountable. 
                    Impossible. Ayanokolibed is no match for gojosu. Akolibed is merely a bullet but mrekk is the whole fucking Donald. It’s time for Akolibed to go to akoli-bed and sleep. Nap time is over. Mrekk will awaken and he will reign supreme. No amount of shitty writing will ever suffice to knock down mrekk because there is no plot device that is more plot device than gojo. 
                    Edging edging edging but akolibed will never akolibust. It simply can not be. HOLLOW PURPLE!!!!
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography color={colors.redAccent[400]} variant="h4">
                Naisu Gamu?
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Naisu gamu? Naisu gamu? Arku mite, 0/7/1, 0/3/1, 0/8/1, 0/0/1 senna top wat ta fuc ku ? Nubu, fak ku bit chi nubu!!!!
                </Typography>
            </AccordionDetails>
        </Accordion>
                <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography color={colors.redAccent[400]} variant="h4">
                V-game hard grinder
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Ta từng nghĩ mình là thiên hạ vô song, bao năm lăn lội chốn giang hồ, công phu phun gió phóng bão tưởng chừng không tìm ra một tựa game nào có thể làm khó ta . Thế mà thật không ngờ, mới rửa tay gác kiếm chưa lâu thì chốn giang hồ kia lại dậy lên một con game mang tên là Valorant, quả là ghê gớm thay!. Hôm nay ta lên đây muốn ngỏ ý mời n vị huynh đài tiểu muội cùng ta chinh phục tung hoành ngang dọc con game V này. Hãy cùng ta trên chặng đường tuy đầy gian nan khắc khổ nhưng cũng vui vẻ tấu hài trong rank cùng chúng sinh 
                </Typography>
            </AccordionDetails>
        </Accordion>
    </Box>
    );
};

export default FaQ;