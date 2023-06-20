import React, { useEffect, useState } from 'react'

import PageTitle from 'components/Typography/PageTitle'
import Layout from 'containers/Layout'

function Dashboard() {

  return (
      <Layout>
        <PageTitle>主页</PageTitle>
        <p>欢迎来到 灵魂绑定通证 - SBT 主页</p>
      </Layout>
  );

}

export default Dashboard

