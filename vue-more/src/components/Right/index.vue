<template>
  <div class="text-content">
    <div class="text-news">
      <div>
				<h3>新闻页主要内容</h3>
				<el-button type="info" @click="dialogFormVisible = true">增加</el-button>
				<el-button type="" @click="chengeCount">增加count</el-button>
				<a>{{counts}}</a>
			</div>
      <el-table :data="lists" class="listdel" style="width: 100%" :row-class-name="tableRowClassName">
        <el-table-column align="center" prop="id" label="序号" width="50"></el-table-column>
        <!-- <el-table-column align="center" prop="img" label="图片" width="150"></el-table-column> -->
				<el-table-column prop="img" label="图片" width="150">
					<template slot-scope="scope">
						<img :src="scope.row.img" alt="" min-width="30" height="30" >
					</template>
				</el-table-column>

        <el-table-column align="center" prop="title" label="新闻标题" width="100"></el-table-column>
        <el-table-column align="center" prop="time" label="日期" width="150"></el-table-column>
        <el-table-column class="xiangqing" align="center" prop="text" label="详情"></el-table-column>
        <el-table-column label="操作" width="200">
          <template slot-scope="scope">
						<Handle :index="scope.$index" :deleteArr="deleteArr"></Handle>
						<el-button type="priment" size="mini" :plain="true"><router-link :to="{path: '/detail',query:{id: scope.row.id}}">详情</router-link></el-button>
						
            <!-- <el-button size="mini" @click="dialogFormVisible = true">编辑</el-button>
            <el-button class="deleteli" size="mini" type="danger" :plain="true" :index="scope.$index" :id="scope.row.id" @click="open1()">删除</el-button>
						<el-button type="priment" size="mini" :plain="true"><router-link :to="{path: '/detail',query:{id: scope.row.id}}">详情</router-link></el-button> -->
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div>
      <!-- Form -->
      <el-dialog title="编辑新闻" :visible.sync="dialogFormVisible">
        <el-form :model="form">
					<el-form-item label="id" :label-width="formLabelWidth">
						<el-input v-model="form.id" autocomplete="off"></el-input>
					</el-form-item>
          <el-form-item label="日期"  :label-width="formLabelWidth">
           <div class="block">
            <el-date-picker
              v-model="form.time"
              type="datetime"
              placeholder="选择日期时间"
              default-time="12:00:00">
            </el-date-picker>
          </div>
          </el-form-item>
          <el-form-item label="新闻标题" :label-width="formLabelWidth">
            <el-input v-model="form.title" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="图片" :label-width="formLabelWidth">
            <el-input v-model="form.img" type="file" placeholder=""></el-input>
          </el-form-item>
          <el-form-item label="详情" :label-width="formLabelWidth">
            <el-input
              type="textarea"
              :rows="2"
              placeholder="请输入内容"
              v-model="form.text">
            </el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormadd">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Handle from './handle'
export default {
  data () {
    return {
			count: this.$store.state.count,
      lists: [{
        id: '1',
        img: '图片',
        title: '星河项目开发',
        time: '2016-05-02',
        text: '2016年获得金鹰奖，集团股东全部聚齐，庆祝'
			}, {
        id: '2',
        img: '图片',
        title: '星河项目开发',
        time: '2016-05-02',
        text: '2016年获得金鹰奖，集团股东全部聚齐，庆祝'
			}],
      dialogTableVisible: false,
			dialogFormVisible: false,
      form: {
				id: '',
				title: '',
				time: '',
				img: '',
				text: ''
			},
      pickerOptions: {
        shortcuts: [{
          text: '今天',
          onClick (picker) {
            picker.$emit('pick', new Date())
          }
        }, {
          text: '昨天',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            picker.$emit('pick', date)
          }
        }, {
          text: '一周前',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', date)
          }
        }]
      },
			formLabelWidth: '120px',
			textarea: '',
      value3: ''
    }
	},
	components: {
		Handle
	},
	// 监听
	computed: {
		counts () {
			return this.$store.state.counts
		}
	},
	methods: {
    // open1 (index) {
		// 	console.log(index)
		// 	this.$message('删除成功')
		// },
		deleteArr (index) {
			console.log(index)
			this.lists.splice(index, 1)
			this.$message('删除成功')
		},
		dialogFormadd () {
			this.$message('添加成功')
			console.log(this.form)
			let car = {id: this.form.id, img: this.form.img, title: this.form.title, text: this.form.text, time: this.form.time}
			this.lists.push(car)
			axios({
				method: 'get',
				url: 'http://192.168.97.253:3000/addnews',
				success: function (res) {
					if (res.status === 200) {
						axios({
							url: 'http://192.168.97.253:3000/getnews',
							method: 'get'
						})
					}
				}
			})
			let formData = new FormData()
			for (var prop in this.form) {
				formData.append(prop, this.form[prop])
				console.log(this.form[prop])
			}
		},
		edit (id) {
			console.log(id)
		},
		chengeCount () {
			// 改变当前的 store 中count
			this.$store.commit('chengeCount')
		},
		chengeFormadd () {
			// 改变当前文件中的数据
			this.$store.commit('chengeFormadd')
		},
    tableRowClassName ({ row, rowIndex }) {
      if (rowIndex % 2) {
        return 'warning-row'
      } else if (rowIndex % 0) {
        return 'success-row'
      }
      return ''
		}
  },
  mounted () {
		console.log('挂载完成。。')
		console.log(this.$store)
    axios({
      method: 'get',
      url: 'http://192.168.97.253:3000/getnews'
    }).then((res) => {
      // axois 问题
      res = res.data
      if (res.status === 200) {
        this.lists = res.data
      }
    })
	}
}
</script>

<style>
.text-content {
  width: 69%;
  float: right;
}
.text-one > img {
  width: 100%;
}
.zk-table {
  border: 1px solid #000;
  width: 100%;
}
.el-table .warning-row {
  background: oldlace;
}
.el-table .success-row {
  background: #f0f9eb;
}
td .cell {
  display: inline-block;
  overflow:hidden;
  text-overflow:ellipsis;
  display:-webkit-box;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:2;
}
</style>
