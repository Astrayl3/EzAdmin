import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../theme";
import {mockBarData as data} from "../data/mockData"; 

const BarChart = ({isDashboard = false}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
    <ResponsiveBar
        data={data}
        theme={{
            axis:{
                domain:{
                    line:{
                        stroke: colors.grey[100]
                    }
                },
                legend:{
                    text:{
                        fill: colors.grey[100]
                    }
                },
                ticks:{
                    line:{
                        stroke: colors.grey[100],
                        strokeWidth: 1
                    }
                },
                text:{
                    fill: colors.grey[100]
                }
            },
            legends:{
                text:{
                    fill: colors.grey[100]
                }
            }
        }}
        keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
        indexBy="country"
        enableLabel={false}
        margin={{top:50, right:130, bottom:50, left:60}}
        padding={0.3}
        colors={{scheme: "nivo"}}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                translateX: 120,
                itemsSpacing: 3,
                itemWidth: 100,
                itemHeight: 16
            }
        ]}
        axisBottom={{ legend: isDashboard ? undefined : 'Country (indexBy)', legendOffset: 32,  legendPosition: 'middle', legendAnchor: 'middle' }}
        axisLeft={{ legend: isDashboard ? undefined : 'Food', legendOffset: -40,  legendPosition: 'middle', legendAnchor: 'middle' }}
    />
    )
}

export default BarChart;