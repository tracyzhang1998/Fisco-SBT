import React, {useEffect, useState} from 'react'

import {
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHeader,
    TableRow,
} from '@roketid/windmill-react-ui'
import PageTitle from 'components/Typography/PageTitle'

import Layout from 'containers/Layout'
import tableCourseData, { ITableCourseData } from 'utils/courseData';
import {finishLearnClass, getFinishClassLevel, getStudyClassLevel} from "../../api/user";


function CourseHours() {

    const [courseInfo, setCourseInfo] = useState<ITableCourseData>({
        id: 0,
        name: '',
        img: '',
        classHour: 0,
        description: ''
     })

    const [courseNumbers, setCourseNumbers] = useState<number[]>([])
    const [finishedCourseLevel, setFinishedCourseLevel] = useState<number[]>([])

    const [courseHoursCount, setCourseHoursCount] = useState<number>(0)

    useEffect(() => {
        getUrl()
    }, [])

    //解析url中的参数，获取课程ID
    async function getUrl() {
        const searchParams = new URLSearchParams(window.location.search);
        const classIdStr = searchParams.get('classId');
        const classId = parseInt(classIdStr || '0');

        const courseInfoTmp = tableCourseData[classId]
        console.log("courseInfoTmp==",courseInfoTmp); // 输出 1
        setCourseInfo(tableCourseData[classId])

        console.log("getUrl  courseInfo ===", courseInfo);

        const courseHoursTmp = []
        
        for (let i= 1; i <= courseInfoTmp.classHour; i++) {
            courseHoursTmp.push(i);
        }
        setCourseNumbers(courseHoursTmp)
        console.log("getUrl courseNumbers:===", courseNumbers)
        fetchFinishedCourseLevel(tableCourseData[classId].id)

        // 获取已学习课程的总课时
        let courseHour = await getStudyClassLevel(localStorage.getItem('signUserId')!, localStorage.getItem('address')!, tableCourseData[classId].id) as any
        let courseHour0 = JSON.parse(courseHour)
        console.log("coursHouresdddddddddddd",courseHour0)
        setCourseHoursCount(courseHour0)
    }

    // 获取已学习课程
    async function fetchFinishedCourseLevel(classId: number) {
        try {
            console.log("fetchFinishedCourseLevel courseInfo ===", courseInfo);
            console.log("courseInfo.id ===", courseInfo.id);
            let result = await getFinishClassLevel(localStorage.getItem('signUserId')!,localStorage.getItem('address')!, classId!) as any
            result = JSON.parse(result)
            console.log("result:",result)
            setFinishedCourseLevel(result); // 更新已学习课程课时数组
        } catch (error) {
            console.error('Failed to fetch finished courses:', error);
        }
    }

    // 完成课时
    async function toFinishCourseLevel(classId: number, level: number) {
        if (!finishedCourseLevel.includes(level)) {
            await finishLearnClass(localStorage.getItem('signUserId')!, classId, level);
            console.log('完成的课程课时：', level);
            window.location.reload();
        }
    }

    return (
        <Layout>
            <PageTitle>我的课程 &gt;  {courseInfo.name}</PageTitle>
            <div>
                <div>
                   <b>课程简介：</b> {courseInfo.description}
                </div>
                <br/>
                <div>
                    已完成：<b>{courseHoursCount}</b> / {courseInfo.classHour} 课时
                </div>
                <br/>
                <TableContainer className="mb-8">
                    <Table>
                        <TableHeader>
                        </TableHeader>
                        <TableBody>
                            {courseNumbers.map((num) => (
                                <TableRow key={num}>
                                    <TableCell>
                                        <div className="flex items-center text-sm">
                                            第 {num} 课时 &nbsp;&nbsp;
                                            <Button
                                                disabled={finishedCourseLevel.includes(num)}
                                                onClick={() =>toFinishCourseLevel(courseInfo.id, num)}
                                            >
                                                {finishedCourseLevel.includes(num) ? '已完成' : '未完成'}
                                            </Button>
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

export default CourseHours
