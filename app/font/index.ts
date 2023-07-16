import { Inter ,Saira_Stencil_One ,Hammersmith_One  ,Rajdhani ,Righteous} from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })
//write the code for use Saira_Stencil_One  font
export const headingFont = Saira_Stencil_One({ subsets: ['latin', 'latin-ext', 'vietnamese']  , weight:"400",
variable:  '--font-harish',

})
export const desscriptFont = Hammersmith_One({ subsets: ['latin', 'latin-ext'] , weight:"400"} )
export const commanFont = Rajdhani({ subsets: [ "latin" ,"latin-ext"] ,weight:"400" } )
export const subHeadingFont = Righteous({ subsets: [ "latin" ,"latin-ext"] ,weight:"400" } )