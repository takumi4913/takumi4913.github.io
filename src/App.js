import React from 'react';
import posed from 'react-pose';
import './App.css';

const sidebarPropsNext0 = {
  open: {
    x: '10%',y: '-209%',
    delayChildren: 380,
    staggerChildren: 20
  },
  closed: {
    delay: 500,
    staggerChildren: 20,
    x: '-100%',y: '-209%'
  }
};
const sidebarPropsNext0_w = {
  open: {
    x: '10%',y: '-108.5%',
    delayChildren: 380,
    staggerChildren: 20
  },
  closed: {
    delay: 500,
    staggerChildren: 20,
    x: '-100%',y: '-108.5%'
  }
};
const sidebarPropsNext1 = {
  open: {
    x: '10%',y: '-409.5%',
    delayChildren: 380,
    staggerChildren: 20
  },
  closed: {
    delay: 500,
    staggerChildren: 20,
    x: '-100%',y: '-409.5%'
  }
};
const sidebarPropsNext1_w = {
  open: {
    x: '10%',y: '-309%',
    delayChildren: 380,
    staggerChildren: 20
  },
  closed: {
    delay: 500,
    staggerChildren: 20,
    x: '-100%',y: '-309%'
  }
};
const sidebarPropsNext2 = {
  open: {
    x: '10%',y: '-610%',
    delayChildren: 380,
    staggerChildren: 20
  },
  closed: {
    delay: 500,
    staggerChildren: 20,
    x: '-100%',y: '-610%'
  }
};
const sidebarPropsNext2_w = {
  open: {
    x: '10%',y: '-509.5%',
    delayChildren: 380,
    staggerChildren: 20
  },
  closed: {
    delay: 500,
    staggerChildren: 20,
    x: '-100%',y: '-509.5%'
  }
};
const sidebarPropsNext3 = {
  open: {
    x: '10%',y: '-810.5%',
    delayChildren: 380,
    staggerChildren: 20
  },
  closed: {
    delay: 500,
    staggerChildren: 20,
    x: '-100%',y: '-810.5%'
  }
};
const sidebarPropsNext3_w = {
  open: {
    x: '10%',y: '-710%',
    delayChildren: 380,
    staggerChildren: 20
  },
  closed: {
    delay: 500,
    staggerChildren: 20,
    x: '-100%',y: '-710%'
  }
};
const itemProps = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: 20 }
};


const SidePanelNext0 = posed.div(sidebarPropsNext0);
const SidePanelNext1 = posed.div(sidebarPropsNext1);
const SidePanelNext2 = posed.div(sidebarPropsNext2);
const SidePanelNext3 = posed.div(sidebarPropsNext3);

const SidePanelNext0_w = posed.div(sidebarPropsNext0_w);
const SidePanelNext1_w = posed.div(sidebarPropsNext1_w);
const SidePanelNext2_w = posed.div(sidebarPropsNext2_w);
const SidePanelNext3_w = posed.div(sidebarPropsNext3_w);

const Item = posed.div(itemProps);

export class PoseList extends React.Component {
  state = { isOpenT: false };

  toggle = () => this.setState({ isOpen: !this.state.isOpen });
  toggle2 = () => this.setState({ isOpenU: !this.state.isOpenU });
  toggle3 = () => this.setState({ isOpenW: !this.state.isOpenW });
  toggle4 = () => this.setState({ isOpenS: !this.state.isOpenS });
  toggle5 = () => this.setState({ isOpenC: !this.state.isOpenC });
  
  render() {
    return (
      <div className="Primary">
          <div className="InHead">TakumiNakashima's&nbsp;Portfolio</div>
        <div class="ButtonBox">
          <button className="button"onClick={this.toggle2}><div className="buttonItem">University</div></button>
          <button className="button"onClick={this.toggle3}><div className="buttonItem">Works</div></button>
          <button className="button"onClick={this.toggle4}><div className="buttonItem">Skills</div></button>
          <button className="button"onClick={this.toggle5}><div className="buttonItem">Contact</div></button>
        </div>

          <div className="InBox">
            <div className="MainBox">
            <div className="SideBox"></div>
            <div className="CenterBox">
              <div className="UnderStyle">
              <div className="Pbox">Profile</div>
              <div className="PboxMain">はじめまして！</div>
              <div className="PboxMain">中京大学工学部情報工学科3年、中島拓己です。</div>
              <div className="PboxMain">　</div>
              <div className="PboxMain">Androidアプリ開発を学んでおり、PythonやJavaを触っています。Web技術も学んでおり、Reactを少々触っています。</div>
              <div className="PboxMain">　</div>
              <div className="PboxMain">趣味でイラスト描いたり、ギター弾いたり、旅行したりしてます。</div>
            </div>
            </div>
            <div className="SideBox_1"></div>
            <div className="UnderBox"></div>
          </div>
          
          <SidePanelNext0_w
          onClick={this.toggle}
          pose={this.state.isOpenU ? 'open' : 'closed'}
          className="sidebar_w">
          <Item onClick={this.toggle}
          pose={this.state.isOpenU ? 'open' : 'closed'} className="NextItem">
          </Item> 
          </SidePanelNext0_w>
            
          <SidePanelNext0
          onClick={this.toggle}
          pose={this.state.isOpenU ? 'open' : 'closed'}
          className="sidebar_U">
          <Item onClick={this.toggle}
          pose={this.state.isOpenU ? 'open' : 'closed'} className="NextItem_w">
            University
            <Item onClick={this.toggle}
              pose={this.state.isOpenU ? 'open' : 'closed'} className="Kari">
                <div >コミックアート部ユニコーンの部長をしています。</div>
                <div className="Univ_box">活動内容</div>
                <div className="Univ_box_B">・イラスト作成</div>
                <div className="Univ_box_B">・部誌の発行</div>
                <div className="Univ_box_B">・技術のレクチャー</div>
            </Item> 
          </Item> 
         
          </SidePanelNext0>

          <SidePanelNext1_w
          onClick={this.toggle}
          pose={this.state.isOpenW ? 'open' : 'closed'}
          className="sidebar_w">
          <Item onClick={this.toggle}
          pose={this.state.isOpenW ? 'open' : 'closed'} className="NextItem">
          </Item> 
          </SidePanelNext1_w>

          <SidePanelNext1
          onClick={this.toggle}
          pose={this.state.isOpenW ? 'open' : 'closed'}
          className="sidebar_W">
          <Item onClick={this.toggle}
          pose={this.state.isOpenW ? 'open' : 'closed'} className="NextItem_w">
            Works
          <Item onClick={this.toggle}
          pose={this.state.isOpenW ? 'open' : 'closed'} className="Kari">
            <div className="Work_box">顔認証カプリ</div>
            <div className="Work_box_2">→表情を認識してスタンプを加えるアプリケーションです。</div>
            <div className="Work_box_3">ポートフォリオ</div>
            <div className="Work_box_4">→ポートフォリオを完成させました。（随時更新）</div>
            <div className="Work_box_5">表情認識カメラアプリ</div>
            <div className="Work_box_6">→指定した表情を検知すると撮るAndroidアプリです。</div>
            </Item> 
          </Item>
          </SidePanelNext1>

          <SidePanelNext2_w
          onClick={this.toggle}
          pose={this.state.isOpenS ? 'open' : 'closed'}
          className="sidebar_w">
          <Item onClick={this.toggle}
          pose={this.state.isOpenS ? 'open' : 'closed'} className="NextItem">
          </Item> 
          </SidePanelNext2_w>

          <SidePanelNext2
          onClick={this.toggle}
          pose={this.state.isOpenS ? 'open' : 'closed'}
          className="sidebar_S">
          <Item onClick={this.toggle}
          pose={this.state.isOpenS ? 'open' : 'closed'} className="NextItem_w">
            Skills
            <Item onClick={this.toggle}
          pose={this.state.isOpenS ? 'open' : 'closed'} className="Kari">
            <div className="Ski_box">言語について</div>
            <div className="Ski_box_2">→Java,Python,JavaScriptを使います。</div>
            <div className="Ski_box_3">その他</div>
            <div className="Ski_box_4">→git,slack,Dockerの使用経験があります。</div>
            </Item> 
          </Item> 
          </SidePanelNext2>

          <SidePanelNext3_w
          onClick={this.toggle}
          pose={this.state.isOpenC ? 'open' : 'closed'}
          className="sidebar_w">
          <Item onClick={this.toggle}
          pose={this.state.isOpenC ? 'open' : 'closed'} className="NextItem">
          </Item> 
          </SidePanelNext3_w>
          </div>

          <SidePanelNext3
          onClick={this.toggle}
          pose={this.state.isOpenC ? 'open' : 'closed'}
          className="sidebar_C">
          <Item onClick={this.toggle}
          pose={this.state.isOpenC ? 'open' : 'closed'} className="NextItem_w">
            Contact
            <Item onClick={this.toggle}
          pose={this.state.isOpenS ? 'open' : 'closed'} className="Kari">
            <div className="Con_box">Twitter</div>
            <div className="Con_box_2">→@mojubo0210</div>
            <div className="Con_box_3">GitHub</div>
            <div className="Con_box_4">→ユーザー名：takumi4913</div>
            <div className="Con_box_5">Mail</div>
            <div className="Con_box_6">→takumi4913@gmail.com</div>
            </Item> 
          </Item> 
          </SidePanelNext3>
      </div>
    );
  }
}

export  default PoseList;
