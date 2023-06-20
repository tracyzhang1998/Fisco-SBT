import React, {useEffect, useState} from 'react'
import tableCourseData, {ITableCourseData} from '../../utils/courseData';

import {
    Button,
} from '@roketid/windmill-react-ui'
import PageTitle from 'components/Typography/PageTitle'

import Layout from 'containers/Layout'
import {startLearnClass, getFinishClass, getUserSBT} from 'api/user';

function Forms() {

    const [finishedCourses, setFinishedCourses] = useState<number[]>([]); // 存储已学习课程的数组
    const [isMintSBT, setIsMintSBT] = useState(false)  //是否已经获取灵魂通证

    useEffect(() => {
        // 在组件加载时获取已学习课程
        fetchFinishedCourses();
        getUserTokenURI()
    }, []);

    // 获取已学习课程
    async function fetchFinishedCourses() {
        try {
            let result = await getFinishClass(localStorage.getItem('signUserId')!,localStorage.getItem('address')!) as any
            result = JSON.parse(result)
            console.log("fetchFinishedCourses result:",result)
            setFinishedCourses(result); // 更新已学习课程数组
        } catch (error) {
            console.error('Failed to fetch finished courses:', error);
        }
    }

     // 获取用户的SBT
    async function getUserTokenURI() {
        const tokenIdTmp = await getUserSBT(localStorage.getItem('signUserId')!, localStorage.getItem('address')!) as any
        const tokenId = JSON.parse(tokenIdTmp)
        console.log("tokenId:", tokenId)
        setIsMintSBT(tokenId !== 0)
    }

    // 开始学习课程
    async function startOrViewClass(classId: number) {
        if (!isMintSBT) {   
            alert("请先获取灵魂通证")
            return
        }

        if (finishedCourses.includes(classId)) {
            // 跳转至学习详情页面
            window.location.href = '/pages/courseHours?classId=' + (classId-1);
        } else {
            // 开始学习课程
            const result = await startLearnClass(localStorage.getItem('signUserId')!, classId) as any
            window.location.href = '/pages/courseHours?classId=' + (classId-1);
        }
    }

    return (
        <Layout>
            <PageTitle>所有课程</PageTitle>

            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div>
                    <div style={{display: 'flex', justifyContent: 'center', marginBottom: '45px'}}>
                        {tableCourseData.slice(0, 3).map((course: ITableCourseData) => (
                            <div key={course.id} style={{marginRight: '150px', marginBottom: '20px'}}>
                                <img src={course.img} alt={course.name} style={{width: '200px', height: '200px'}}/>

                                <Button
                                    className="mt-8"
                                    block
                                    onClick={() => startOrViewClass(course.id)}
                                >
                                    {finishedCourses.includes(course.id) ? '学习详情' : '开始学习'} {/* 根据课程是否已学习显示不同文本 */}
                                </Button>
                            </div>
                        ))}
                    </div>

                    <div style={{display: 'flex', justifyContent: 'center', marginBottom: '20px'}}>
                        {tableCourseData.slice(3, 6).map((course: ITableCourseData) => (
                            <div key={course.id} style={{marginRight: '150px', marginBottom: '20px'}}>
                                <img src={course.img} alt={course.name} style={{width: '200px', height: '200px'}}/>

                                <Button
                                    className="mt-8"
                                    block
                                    onClick={() => startOrViewClass(course.id)}
                                >
                                    {finishedCourses.includes(course.id) ? '学习详情' : '开始学习'}
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Forms
