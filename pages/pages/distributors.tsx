import React, {useEffect, useState} from 'react'

import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHeader,
    TableRow,
} from '@roketid/windmill-react-ui'
import PageTitle from 'components/Typography/PageTitle'

import Layout from 'containers/Layout'

import {
    getFinishClass, getStudyClassLevel,
} from 'api/user'
import tableCourseData, {ITableCourseData} from "../../utils/courseData";
import Link from 'next/link'


function Distributors() {
    const [myCourses, setMyCourses] = useState<number[]>([])
    interface ICourseHourse{
        classId: number
        hours: number
    }
    const [courseHoursCount, setCourseHoursCount] = useState<number[]>([])

    useEffect(() => {
        getMyCourse()
    }, [])

    // 获取我的课程
    async function getMyCourse() {
        let myCourses = await getFinishClass(localStorage.getItem('signUserId')!, localStorage.getItem('address')!) as any
        myCourses = JSON.parse(myCourses)
        setMyCourses(myCourses)

        let courseHours = []
        //第一个元素占位，无任何意义
        courseHours.push(0)
        for (let i = 1; i < 7; i++) {
            // 获取已学习课程的总课时
            let courseHour = await getStudyClassLevel(localStorage.getItem('signUserId')!, localStorage.getItem('address')!, i) as any
            courseHour = JSON.parse(courseHour)
            courseHours.push(courseHour)
        }
        setCourseHoursCount(courseHours)
        console.log("courseHoursCount===",courseHours,  courseHoursCount);
    }

    return (
        <Layout>
            <PageTitle>我的课程</PageTitle>
            <div>

                <TableContainer className="mb-8">
                    <Table>
                        <TableHeader>
                            <tr>
                                {/* {courseData} */}
                            </tr>
                        </TableHeader>
                        <TableBody>
                            {myCourses.map((key:number) => (

                                <TableRow key={key-1}>
                                    <TableCell>
                                        <div className="flex items-center text-sm">
                                            <img
                                                src={tableCourseData[key-1].img}
                                                alt={tableCourseData[key-1].name}
                                                style={{ width: '50px', height: '50px' }} // 设置图片的宽度和高度
                                            /> &nbsp;&nbsp;
                                            <Link href={`/pages/courseHours?classId=${key-1}`}>
                                                <a className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline">
                                                    {tableCourseData[key-1].name}
                                                </a>
                                            </Link>&nbsp;&nbsp;
                                            [ 已完成 {courseHoursCount[tableCourseData[key-1].id]} / {tableCourseData[key-1].classHour} 课时 ]
                                        </div>
                                    </TableCell>
                                </TableRow>

                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </div>


        </Layout>
    )
}

export default Distributors
