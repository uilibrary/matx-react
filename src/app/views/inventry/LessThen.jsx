
import React, { useState, useEffect } from 'react'
import { ValidatorForm} from 'react-material-ui-form-validator'
import { Breadcrumb, SimpleCard } from 'app/components'
import {styled } from '@mui/system'
import { MDBDataTable} from 'mdbreact';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'

const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '16px',
        },
    },
}))
const LessThen = () => {
    const [state, setState] = useState({
        date: new Date(),
    })
    // const [page, setPage] = React.useState(0)
    const data = {
        columns: [
          {
            label: 'Name',
            field: 'name',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Position',
            field: 'position',
            sort: 'asc',
            width: 270
          },
          {
            label: 'Office',
            field: 'office',
            sort: 'asc',
            width: 200
          },
          {
            label: 'Age',
            field: 'age',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Start date',
            field: 'date',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Salary',
            field: 'salary',
            sort: 'asc',
            width: 100
          }
        ],
        rows: [
          {
            name: 'Tiger Nixon',
            position: 'System Architect',
            office: 'Edinburgh',
            age: '61',
            date: '2011/04/25',
            salary: '$320'
          },
          {
            name: 'Garrett Winters',
            position: 'Accountant',
            office: 'Tokyo',
            age: '63',
            date: '2011/07/25',
            salary: '$170'
          },
          {
            name: 'Ashton Cox',
            position: 'Junior Technical Author',
            office: 'San Francisco',
            age: '66',
            date: '2009/01/12',
            salary: '$86'
          },
          {
            name: 'Cedric Kelly',
            position: 'Senior Javascript Developer',
            office: 'Edinburgh',
            age: '22',
            date: '2012/03/29',
            salary: '$433'
          },
          {
            name: 'Airi Satou',
            position: 'Accountant',
            office: 'Tokyo',
            age: '33',
            date: '2008/11/28',
            salary: '$162'
          },
          {
            name: 'Brielle Williamson',
            position: 'Integration Specialist',
            office: 'New York',
            age: '61',
            date: '2012/12/02',
            salary: '$372'
          },
          {
            name: 'Herrod Chandler',
            position: 'Sales Assistant',
            office: 'San Francisco',
            age: '59',
            date: '2012/08/06',
            salary: '$137'
          },
          {
            name: 'Rhona Davidson',
            position: 'Integration Specialist',
            office: 'Tokyo',
            age: '55',
            date: '2010/10/14',
            salary: '$327'
          },
          {
            name: 'Colleen Hurst',
            position: 'Javascript Developer',
            office: 'San Francisco',
            age: '39',
            date: '2009/09/15',
            salary: '$205'
          },
          {
            name: 'Sonya Frost',
            position: 'Software Engineer',
            office: 'Edinburgh',
            age: '23',
            date: '2008/12/13',
            salary: '$103'
          },
          {
            name: 'Jena Gaines',
            position: 'Office Manager',
            office: 'London',
            age: '30',
            date: '2008/12/19',
            salary: '$90'
          },
          {
            name: 'Quinn Flynn',
            position: 'Support Lead',
            office: 'Edinburgh',
            age: '22',
            date: '2013/03/03',
            salary: '$342'
          },
          {
            name: 'Charde Marshall',
            position: 'Regional Director',
            office: 'San Francisco',
            age: '36',
            date: '2008/10/16',
            salary: '$470'
          },
          {
            name: 'Haley Kennedy',
            position: 'Senior Marketing Designer',
            office: 'London',
            age: '43',
            date: '2012/12/18',
            salary: '$313'
          },
          {
            name: 'Tatyana Fitzpatrick',
            position: 'Regional Director',
            office: 'London',
            age: '19',
            date: '2010/03/17',
            salary: '$385'
          },
          {
            name: 'Michael Silva',
            position: 'Marketing Designer',
            office: 'London',
            age: '66',
            date: '2012/11/27',
            salary: '$198'
          },
          {
            name: 'Paul Byrd',
            position: 'Chief Financial Officer (CFO)',
            office: 'New York',
            age: '64',
            date: '2010/06/09',
            salary: '$725'
          },
          {
            name: 'Gloria Little',
            position: 'Systems Administrator',
            office: 'New York',
            age: '59',
            date: '2009/04/10',
            salary: '$237'
          },
          {
            name: 'Bradley Greer',
            position: 'Software Engineer',
            office: 'London',
            age: '41',
            date: '2012/10/13',
            salary: '$132'
          },
          {
            name: 'Dai Rios',
            position: 'Personnel Lead',
            office: 'Edinburgh',
            age: '35',
            date: '2012/09/26',
            salary: '$217'
          },
          {
            name: 'Jenette Caldwell',
            position: 'Development Lead',
            office: 'New York',
            age: '30',
            date: '2011/09/03',
            salary: '$345'
          },
          {
            name: 'Yuri Berry',
            position: 'Chief Marketing Officer (CMO)',
            office: 'New York',
            age: '40',
            date: '2009/06/25',
            salary: '$675'
          },
          {
            name: 'Caesar Vance',
            position: 'Pre-Sales Support',
            office: 'New York',
            age: '21',
            date: '2011/12/12',
            salary: '$106'
          },
          {
            name: 'Doris Wilder',
            position: 'Sales Assistant',
            office: 'Sidney',
            age: '23',
            date: '2010/09/20',
            salary: '$85'
          },
          {
            name: 'Angelica Ramos',
            position: 'Chief Executive Officer (CEO)',
            office: 'London',
            age: '47',
            date: '2009/10/09',
            salary: '$1'
          },
          {
            name: 'Gavin Joyce',
            position: 'Developer',
            office: 'Edinburgh',
            age: '42',
            date: '2010/12/22',
            salary: '$92'
          },
          {
            name: 'Jennifer Chang',
            position: 'Regional Director',
            office: 'Singapore',
            age: '28',
            date: '2010/11/14',
            salary: '$357'
          },
          {
            name: 'Brenden Wagner',
            position: 'Software Engineer',
            office: 'San Francisco',
            age: '28',
            date: '2011/06/07',
            salary: '$206'
          },
          {
            name: 'Fiona Green',
            position: 'Chief Operating Officer (COO)',
            office: 'San Francisco',
            age: '48',
            date: '2010/03/11',
            salary: '$850'
          },
          {
            name: 'Shou Itou',
            position: 'Regional Marketing',
            office: 'Tokyo',
            age: '20',
            date: '2011/08/14',
            salary: '$163'
          },
          {
            name: 'Michelle House',
            position: 'Integration Specialist',
            office: 'Sidney',
            age: '37',
            date: '2011/06/02',
            salary: '$95'
          },
          {
            name: 'Suki Burks',
            position: 'Developer',
            office: 'London',
            age: '53',
            date: '2009/10/22',
            salary: '$114'
          },
          {
            name: 'Prescott Bartlett',
            position: 'Technical Author',
            office: 'London',
            age: '27',
            date: '2011/05/07',
            salary: '$145'
          },
          {
            name: 'Gavin Cortez',
            position: 'Team Leader',
            office: 'San Francisco',
            age: '22',
            date: '2008/10/26',
            salary: '$235'
          },
          {
            name: 'Martena Mccray',
            position: 'Post-Sales support',
            office: 'Edinburgh',
            age: '46',
            date: '2011/03/09',
            salary: '$324'
          },
          {
            name: 'Unity Butler',
            position: 'Marketing Designer',
            office: 'San Francisco',
            age: '47',
            date: '2009/12/09',
            salary: '$85'
          },
          {
            name: 'Howard Hatfield',
            position: 'Office Manager',
            office: 'San Francisco',
            age: '51',
            date: '2008/12/16',
            salary: '$164'
          },
          {
            name: 'Hope Fuentes',
            position: 'Secretary',
            office: 'San Francisco',
            age: '41',
            date: '2010/02/12',
            salary: '$109'
          },
          {
            name: 'Vivian Harrell',
            position: 'Financial Controller',
            office: 'San Francisco',
            age: '62',
            date: '2009/02/14',
            salary: '$452'
          },
          {
            name: 'Timothy Mooney',
            position: 'Office Manager',
            office: 'London',
            age: '37',
            date: '2008/12/11',
            salary: '$136'
          },
          {
            name: 'Jackson Bradshaw',
            position: 'Director',
            office: 'New York',
            age: '65',
            date: '2008/09/26',
            salary: '$645'
          },
          {
            name: 'Olivia Liang',
            position: 'Support Engineer',
            office: 'Singapore',
            age: '64',
            date: '2011/02/03',
            salary: '$234'
          },
          {
            name: 'Bruno Nash',
            position: 'Software Engineer',
            office: 'London',
            age: '38',
            date: '2011/05/03',
            salary: '$163'
          },
          {
            name: 'Sakura Yamamoto',
            position: 'Support Engineer',
            office: 'Tokyo',
            age: '37',
            date: '2009/08/19',
            salary: '$139'
          },
          {
            name: 'Thor Walton',
            position: 'Developer',
            office: 'New York',
            age: '61',
            date: '2013/08/11',
            salary: '$98'
          },
          {
            name: 'Finn Camacho',
            position: 'Support Engineer',
            office: 'San Francisco',
            age: '47',
            date: '2009/07/07',
            salary: '$87'
          },
          {
            name: 'Serge Baldwin',
            position: 'Data Coordinator',
            office: 'Singapore',
            age: '64',
            date: '2012/04/09',
            salary: '$138'
          },
          {
            name: 'Zenaida Frank',
            position: 'Software Engineer',
            office: 'New York',
            age: '63',
            date: '2010/01/04',
            salary: '$125'
          },
          {
            name: 'Zorita Serrano',
            position: 'Software Engineer',
            office: 'San Francisco',
            age: '56',
            date: '2012/06/01',
            salary: '$115'
          },
          {
            name: 'Jennifer Acosta',
            position: 'Junior Javascript Developer',
            office: 'Edinburgh',
            age: '43',
            date: '2013/02/01',
            salary: '$75'
          },
          {
            name: 'Cara Stevens',
            position: 'Sales Assistant',
            office: 'New York',
            age: '46',
            date: '2011/12/06',
            salary: '$145'
          },
          {
            name: 'Hermione Butler',
            position: 'Regional Director',
            office: 'London',
            age: '47',
            date: '2011/03/21',
            salary: '$356'
          },
          {
            name: 'Lael Greer',
            position: 'Systems Administrator',
            office: 'London',
            age: '21',
            date: '2009/02/27',
            salary: '$103'
          },
          {
            name: 'Jonas Alexander',
            position: 'Developer',
            office: 'San Francisco',
            age: '30',
            date: '2010/07/14',
            salary: '$86'
          },
          {
            name: 'Shad Decker',
            position: 'Regional Director',
            office: 'Edinburgh',
            age: '51',
            date: '2008/11/13',
            salary: '$183'
          },
          {
            name: 'Michael Bruce',
            position: 'Javascript Developer',
            office: 'Singapore',
            age: '29',
            date: '2011/06/27',
            salary: '$183'
          },
          {
            name: 'Donna Snider',
            position: 'Customer Support',
            office: 'New York',
            age: '27',
            date: '2011/01/25',
            salary: '$112'
          }
        ]
    };
    // const handleChangePage = (event, newPage) => {
    //     setPage(newPage)
    // }

    // const handleChangeRowsPerPage = (event) => {
    //     setRowsPerPage(+event.target.value)
    //     setPage(0)
    // }
    useEffect(() => {
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            console.log(value)

            if (value !== state.password) {
                return false
            }
            return true
        })
        return () => ValidatorForm.removeValidationRule('isPasswordMatch')
    }, [state.password])

    // const handleSubmit = (event) => {
    //     // console.log("submitted");
    //     // console.log(event);
    // }

    // const handleChange = (event) => {
    //     event.persist()
    //     setState({
    //         ...state,
    //         [event.target.name]: event.target.value,
    //     })
    // }

    const {
        mobile,
    } = state

    return (
        <Container>
                  <SimpleCard >
        <div className="breadcrumb">
            <Breadcrumb
                routeSegments={[
                    { name: 'Less Stock' },
                ]}
            />
        </div>
        </SimpleCard>
        <br/>
        <SimpleCard title="User Details">
        <MDBDataTable
      striped
      checkbox
      data={data}
    />
        </SimpleCard>
        
    </Container>
    )
}

export default LessThen;
