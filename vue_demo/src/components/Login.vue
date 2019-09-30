<!--<template>-->
<!--<Form ref="formInline" :model="formInline" :rules="ruleInline" inline>-->
<!--<FormItem prop="user">-->
<!--<Input type="text" v-model="formInline.userName" placeholder="Username">-->
<!--<Icon type="ios-person-outline" slot="prepend"></Icon>-->
<!--</Input>-->
<!--</FormItem>-->
<!--<FormItem prop="password">-->
<!--<Input type="password" v-model="formInline.password" placeholder="Password">-->
<!--<Icon type="ios-lock-outline" slot="prepend"></Icon>-->
<!--</Input>-->
<!--</FormItem>-->
<!--<FormItem>-->
<!--<Button type="primary" @click="handleSubmit('formInline')">Signin</Button>-->
<!--</FormItem>-->
<!--</Form>-->
<!--</template>-->
<!--<script>-->
<!--export default {-->
<!--data () {-->
<!--return {-->
<!--formInline: {-->
<!--userName: '',-->
<!--password: ''-->
<!--},-->
<!--ruleInline: {-->
<!--userName: [-->
<!--{ required: true, message: 'Please fill in the user name', trigger: 'blur' }-->
<!--],-->
<!--password: [-->
<!--{ required: true, message: 'Please fill in the password.', trigger: 'blur' },-->
<!--{ type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }-->
<!--]-->
<!--}-->
<!--}-->
<!--},-->
<!--methods: {-->
<!--handleSubmit(name) {-->
<!--this.$refs[name].validate((valid) => {-->
<!--if (valid) {-->
<!--this.$axios({-->
<!--url: '/rest/login',//请求的地址-->
<!--method: 'post',//请求的方式-->
<!--data: this.formInline//请求的表单数据-->
<!--}).then(res => {-->
<!--debugger-->
<!--console.info('后台返回的数据', res.data);-->
<!--}).catch(err => {-->
<!--console.info('报错的信息', err.response.message);-->
<!--});-->
<!--} else {-->
<!--this.$Message.error('表单校验失败!');-->
<!--}-->
<!--})-->
<!--}-->
<!--}-->
<!--}-->
<!--</script>-->

<template>
  <div>
    <div id="testDiv1">
      <Button>Default</Button>
      <Button type="primary">Primary</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="text">Text</Button>
      <br><br>
      <Button type="info">Info</Button>
      <Button type="success">Success</Button>
      <Button type="warning">Warning</Button>
      <Button type="error">Error</Button>
      <Icon type="ios-add" size="30"/>
    </div>
    <div id="testDiv2">
      <Card style="width:350px">
        <p slot="title">
          <Icon type="ios-film-outline"></Icon>
          Classic film
        </p>
        <a href="#" slot="extra" @click.prevent="changeLimit">
          <Icon type="ios-loop-strong"></Icon>
          Change
        </a>
        <ul>
          <li v-for="item in randomMovieList">
            <a :href="item.url" target="_blank">{{ item.name }}</a>
            <span>
                    <Icon type="ios-star" v-for="n in 4" :key="n"></Icon><Icon type="ios-star"
                                                                               v-if="item.rate >= 9.5"></Icon><Icon
              type="ios-star-half" v-else></Icon>
                    {{ item.rate }}
                </span>
          </li>
        </ul>
      </Card>
    </div>
    <div id="testDiv3">
      <Collapse v-model="value2" accordion>
        <Panel name="1">
          史蒂夫·乔布斯
          <p slot="content">史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>
        </Panel>
        <Panel name="2">
          斯蒂夫·盖瑞·沃兹尼亚克
          <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary
            Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC
            Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
        </Panel>
        <Panel name="3">
          乔纳森·伊夫
          <p slot="content">
            乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
        </Panel>
      </Collapse>
    </div>
    <div id="testDiv4" class="demo-split">
      <Split v-model="split2" mode="vertical">
        <div slot="top" class="demo-split-pane">
          Top Pane
        </div>
        <div slot="bottom" class="demo-split-pane">
          Bottom Pane
        </div>
      </Split>
    </div>
    <div id="testDiv5">
      <p>Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive
        officer, and a co-founder of Apple Inc.</p>
      <Divider/>
      <p>Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive
        officer, and a co-founder of Apple Inc.</p>
      <Divider>With Text</Divider>
      <p>Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive
        officer, and a co-founder of Apple Inc.</p>
      <Divider dashed/>
      <p>Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive
        officer, and a co-founder of Apple Inc.</p>
    </div>
    <div id="testDiv6" style="padding: 10px;background: #f8f8f9">
      <Card title="Options" icon="ios-options" :padding="0" shadow style="width: 300px;">
        <CellGroup>
          <Cell title="Only show titles"/>
          <Cell title="Display label content" label="label content"/>
          <Cell title="Display right content" extra="details"/>
          <Cell title="Link" extra="details" to="/components/button"/>
          <Cell title="Open link in new window" to="/components/button" target="_blank"/>
          <Cell title="Disabled" disabled/>
          <Cell title="Selected" selected/>
          <Cell title="With Badge" to="/components/badge">
            <Badge :count="10" slot="extra"/>
          </Cell>
          <Cell title="With Switch">
            <Switch v-model="switchValue" slot="extra"/>
          </Cell>
        </CellGroup>
      </Card>
    </div>
    <div id="testDiv7">
      <Row>
        <Col span="8">
        <Menu :theme="theme2">
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-paper"/>
              内容管理
            </template>
            <MenuItem name="1-1">文章管理</MenuItem>
            <MenuItem name="1-2">评论管理</MenuItem>
            <MenuItem name="1-3">举报管理</MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-people"/>
              用户管理
            </template>
            <MenuItem name="2-1">新增用户</MenuItem>
            <MenuItem name="2-2">活跃用户</MenuItem>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <Icon type="ios-stats"/>
              统计分析
            </template>
            <MenuGroup title="使用">
              <MenuItem name="3-1">新增和启动</MenuItem>
              <MenuItem name="3-2">活跃分析</MenuItem>
              <MenuItem name="3-3">时段分析</MenuItem>
            </MenuGroup>
            <MenuGroup title="留存">
              <MenuItem name="3-4">用户留存</MenuItem>
              <MenuItem name="3-5">流失用户</MenuItem>
            </MenuGroup>
          </Submenu>
        </Menu>
        </Col>
        <Col span="8">
        <Menu :theme="theme2" active-name="1-2" :open-names="['1']">
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-paper"/>
              内容管理
            </template>
            <MenuItem name="1-1">文章管理</MenuItem>
            <MenuItem name="1-2">评论管理</MenuItem>
            <MenuItem name="1-3">举报管理</MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-people"/>
              用户管理
            </template>
            <MenuItem name="2-1">新增用户</MenuItem>
            <MenuItem name="2-2">活跃用户</MenuItem>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <Icon type="ios-stats"/>
              统计分析
            </template>
            <MenuGroup title="使用">
              <MenuItem name="3-1">新增和启动</MenuItem>
              <MenuItem name="3-2">活跃分析</MenuItem>
              <MenuItem name="3-3">时段分析</MenuItem>
            </MenuGroup>
            <MenuGroup title="留存">
              <MenuItem name="3-4">用户留存</MenuItem>
              <MenuItem name="3-5">流失用户</MenuItem>
            </MenuGroup>
          </Submenu>
        </Menu>
        </Col>
        <Col span="8">
        <Menu :theme="theme2" :open-names="['1']" accordion>
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-paper"/>
              内容管理
            </template>
            <MenuItem name="1-1">文章管理</MenuItem>
            <MenuItem name="1-2">评论管理</MenuItem>
            <MenuItem name="1-3">举报管理</MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-people"/>
              用户管理
            </template>
            <MenuItem name="2-1">新增用户</MenuItem>
            <MenuItem name="2-2">活跃用户</MenuItem>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <Icon type="ios-stats"/>
              统计分析
            </template>
            <MenuGroup title="使用">
              <MenuItem name="3-1">新增和启动</MenuItem>
              <MenuItem name="3-2">活跃分析</MenuItem>
              <MenuItem name="3-3">时段分析</MenuItem>
            </MenuGroup>
            <MenuGroup title="留存">
              <MenuItem name="3-4">用户留存</MenuItem>
              <MenuItem name="3-5">流失用户</MenuItem>
            </MenuGroup>
          </Submenu>
        </Menu>
        </Col>
      </Row>
      <br>
      <p>Change theme</p>
      <RadioGroup v-model="theme2">
        <Radio label="light"></Radio>
        <Radio label="dark"></Radio>
      </RadioGroup>
    </div>
    <div id="testDiv8">
      <Tabs value="name1">
        <TabPane label="标签一" name="name1">标签一的内容</TabPane>
        <TabPane label="标签二" name="name2">标签二的内容</TabPane>
        <TabPane label="标签三" name="name3">标签三的内容</TabPane>
      </Tabs>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'testDiv7',
    data() {
      return {
        theme2: 'light'
      }
    },
    name: 'testDiv6',
    data() {
      return {
        switchValue: true
      }
    },
    name: 'testDiv4',
    data() {
      return {
        split2: 0.5
      }
    },
    name: 'testDiv3',
    data() {
      return {
        value2: '1'
      }
    },
    name: 'testDiv2',
    data() {
      debugger
      return {
        movieList: [
          {
            name: 'The Shawshank Redemption',
            url: 'https://movie.douban.com/subject/1292052/',
            rate: 9.6
          },
          {
            name: 'Leon:The Professional',
            url: 'https://movie.douban.com/subject/1295644/',
            rate: 9.4
          },
          {
            name: 'Farewell to My Concubine',
            url: 'https://movie.douban.com/subject/1291546/',
            rate: 9.5
          },
          {
            name: 'Forrest Gump',
            url: 'https://movie.douban.com/subject/1292720/',
            rate: 9.4
          },
          {
            name: 'Life Is Beautiful',
            url: 'https://movie.douban.com/subject/1292063/',
            rate: 9.5
          },
          {
            name: 'Spirited Away',
            url: 'https://movie.douban.com/subject/1291561/',
            rate: 9.2
          },
          {
            name: 'Schindler s List',
            url: 'https://movie.douban.com/subject/1295124/',
            rate: 9.4
          },
          {
            name: 'The Legend of 1900',
            url: 'https://movie.douban.com/subject/1292001/',
            rate: 9.2
          },
          {
            name: 'WALL·E',
            url: 'https://movie.douban.com/subject/2131459/',
            rate: 9.3
          },
          {
            name: 'Inception',
            url: 'https://movie.douban.com/subject/3541415/',
            rate: 9.2
          }
        ],
        randomMovieList: []
      }
    },
    methods: {
      changeLimit() {
        debugger
        function getArrayItems(arr, num) {
          const temp_array = [];
          for (let index in arr) {
            temp_array.push(arr[index]);
          }
          const return_array = [];
          for (let i = 0; i < num; i++) {
            if (temp_array.length > 0) {
              const arrIndex = Math.floor(Math.random() * temp_array.length);
              return_array[i] = temp_array[arrIndex];
              temp_array.splice(arrIndex, 1);
            } else {
              break;
            }
          }
          return return_array;
        }

        this.randomMovieList = getArrayItems(this.movieList, 5);
      }
    },
    mounted() {
      debugger
      this.changeLimit();
    }
  }
</script>
<style>
  .demo-split {
    height: 200px;
    border: 1px solid #dcdee2;
  }

  .demo-split-pane {
    padding: 10px;
  }
</style>
