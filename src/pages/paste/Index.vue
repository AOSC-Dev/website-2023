<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import VCodeBlock from '@wdns/vue-code-block';

const languageList = ref([
  "1C",
  "4D",
  "ABAP",
  "ABNF",
  "Accesslogs",
  "Ada",
  "Apex",
  "Arduino",
  "ARMassembler",
  "AVRassembler",
  "ActionScript",
  "AlanIF",
  "Alan",
  "AngelScript",
  "Apache",
  "AppleScript",
  "Arcade",
  "AsciiDoc",
  "AspectJ",
  "AutoHotkey",
  "AutoIt",
  "Awk",
  "Ballerina",
  "Bash",
  "Basic",
  "BBCode",
  "Blade (Laravel)",
  "BNF",
  "BQN",
  "Brainfuck",
  "C#",
  "C",
  "C++",
  "C/AL",
  "C3",
  "Cache Object Script",
  "Candid",
  "CMake",
  "COBOL",
  "Coq",
  "CSP",
  "CSS",
  "Cap’n Proto",
  "Chaos",
  "Chapel",
  "Cisco CLI",
  "Clojure",
  "CoffeeScript",
  "CpcdosC+",
  "Crmsh",
  "Crystal",
  "cURL",
  "Cypher (Neo4j)",
  "D",
  "Dafny",
  "Dart",
  "Delphi",
  "Diff",
  "Django",
  "DNS Zone file",
  "Dockerfile",
  "DOS",
  "dsconfig",
  "DTS (Device Tree)",
  "Dust",
  "Dylan",
  "EBNF",
  "Elixir",
  "Elm",
  "Erlang",
  "Excel",
  "Extempore",
  "F#",
  "FIX",
  "Flix",
  "Fortran",
  "FunC",
  "G-Code",
  "Gams",
  "GAUSS",
  "GDScript",
  "Gherkin",
  "Glimmer and EmberJS",
  "GN for Ninja",
  "Go",
  "Grammatical Framework",
  "Golo",
  "Gradle",
  "GraphQL",
  "Groovy",
  "GSQL",
  "HTML, XML",
  "HTTP",
  "Haml",
  "Handlebars",
  "Haskell",
  "Haxe",
  "High-level shader language",
  "Hy",
  "Ini, TOML",
  "Inform7",
  "IRPF90",
  "Iptables",
  "JSON",
  "Java",
  "JavaScript",
  "Jolie",
  "Julia",
  "Kotlin",
  "Lang",
  "LaTeX",
  "Leaf",
  "Lean",
  "Lasso",
  "Less",
  "LDIF",
  "Lisp",
  "LiveCode Server",
  "LiveScript",
  "LookML",
  "Lua",
  "Macaulay2",
  "Makefile",
  "Markdown",
  "Mathematica",
  "Matlab",
  "Maxima",
  "Maya Embedded Language",
  "Mercury",
  "MIPS Assembler",
  "Mint",
  "mIRC Scripting Language",
  "Mizar",
  "MKB",
  "MLIR",
  "Mojolicious",
  "Monkey",
  "Moonscript",
  "Motoko",
  "N1QL",
  "NSIS",
  "Never",
  "Nginx",
  "Nim",
  "Nix",
  "Oak",
  "Object Constraint Language",
  "OCaml",
  "Objective C",
  "OpenGL Shading Language",
  "OpenSCAD",
  "Oracle Rules Language",
  "Oxygene",
  "PF",
  "PHP",
  "Papyrus",
  "Parser3",
  "Perl",
  "Pine Script",
  "Plaintext",
  "Pony",
  "PostgreSQL & PL/pgSQL",
  "PowerShell",
  "Processing",
  "Prolog",
  "Properties",
  "Protocol Buffers",
  "Puppet",
  "Python",
  "Python profiler results",
  "Python REPL",
  "Q#",
  "Q",
  "QML",
  "R",
  "Razor CSHTML",
  "ReasonML",
  "Rebol & Red",
  "RenderMan RIB",
  "RenderMan RSL",
  "RiScript",
  "RISC-V Assembly",
  "Roboconf",
  "Robot Framework",
  "RPM spec files",
  "Ruby",
  "Rust",
  "RVT Script",
  "SAS",
  "SCSS",
  "SQL",
  "STEP Part 21",
  "Scala",
  "Scheme",
  "Scilab",
  "SFZ",
  "Shape Expressions",
  "Shell",
  "Smali",
  "Smalltalk",
  "SML",
  "Solidity",
  "Splunk SPL",
  "Stan",
  "Stata",
  "Structured Text",
  "Stylus",
  "SubUnit",
  "Supercollider",
  "Svelte",
  "Swift",
  "Tcl",
  "Terraform (HCL)",
  "Test Anything Protocol",
  "Thrift",
  "Toit",
  "TP",
  "Transact-SQL",
  "Twig",
  "TypeScript",
  "Unicorn Rails log",
  "VB.Net",
  "VBA",
  "VBScript",
  "VHDL",
  "Vala",
  "Verilog",
  "Vim Script",
  "X#",
  "X++",
  "x86 Assembly",
  "x86 Assembly (AT&T)",
  "XL",
  "XQuery",
  "YAML",
  "ZenScript",
  "Zephir",
]);

const selectDateTime = ref();
const pasteFormData = ref({
  title: "",
  contents: "",
  language: "Text",
  expiry_time: 0,
  password: "",
  attachments: [],
});
const pasteRes = ref(null);

const linkPre = `${window.location.protocol}//${window.location.host}`

const submiting = ref(false);
function submit() {
  submiting.value = true;
  let data = {}
  Object.assign(data, pasteFormData.value);
  if (data.expiry_time == 0) {
    delete data.expiry_time
  }
  if (data.password == "") {
    delete data.password
  }
  axios
    .post("/pasteApi/api/paste/submit", data)
    .then((res) => {
      submiting.value = false;
      pasteRes.value = res.data;
      console.log(res.data);
    })
    .catch((err) => {
      submiting.value = false;
      console.log(err);
      pasteRes.value = { res: "fail" };
    });
}

function setFile(event) {
  console.log(event);
  // 读取文件内容为base64
  const reader = new FileReader();
  reader.onload = (v) => {
    console.log(v.target.result)
    pasteFormData.value.attachments = [
      {
        name: event.name,
        size: event.size,
        data: v.target.result.substring(5),
        mime_type: "image/png",
      },
    ];
  };
  reader.readAsDataURL(event.raw);
}
function removeFile() {
  pasteFormData.value.attachments = [];
}
function expTimeChange(v) {
  if (v == null) {
    pasteFormData.value.expiry_time = 0;
  } else {
    pasteFormData.value.expiry_time = v.getTime() / 1000;
  }
}
function back() {
  pasteRes.value = null
  pasteFormData.value = {
    title: "",
    language: 'text',
    contents: "",
    expiry_time: 0,
    password: "",
    attachments: [],
  };
  selectDateTime.value = ''
}
</script>

<template>
  <div class="pt-[30px] p-[80px]">
    <h1 class="text-center text-3xl mb-[30px] font-bold">粘贴板</h1>
    <el-form label-width="auto" v-model="pasteFormData" v-if="pasteRes == null">
      <el-form-item label="标题*">
        <el-input v-model="pasteFormData.title" />
      </el-form-item>
      <el-form-item label="语言*">
        <el-select v-model="pasteFormData.language" filterable>
          <el-option
            v-for="item in languageList"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="内容*">
        <el-input v-model="pasteFormData.contents" type="textarea" />
      </el-form-item>
      <el-form-item label="预览">
        <VCodeBlock class="w-full" v-if="pasteFormData.contents != ''" :code="pasteFormData.contents" :lang="pasteFormData.language" highlightjs theme="gradient-light" />
      </el-form-item>
      <el-form-item label="附件*">
        <el-upload
          :on-change="setFile"
          :on-remove="removeFile"
          :auto-upload="false"
          :limit="1"
        >
          <el-button type="success">选择文件</el-button></el-upload
        >
      </el-form-item>
      <el-form-item label="到期时间">
        <el-date-picker
          type="datetime"
          v-model="selectDateTime"
          @change="expTimeChange"
        />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="pasteFormData.password" />
      </el-form-item>
      <el-form-item label=" ">
        <el-button
          type="primary"
          size="large"
          @click="submit"
          :loading="submiting"
          >提交</el-button
        >
      </el-form-item>
    </el-form>

    <div v-else>
      <el-result icon="success" title="成功" v-if="pasteRes.contents">
        <template #sub-title>
          <a
            :href="`${linkPre}/paste/detail?id=${pasteRes.paste_id_repr}${pasteFormData.password != '' ? '&needPassword=true' : ''}`"
            class="text-link"
          >
            {{
              `${linkPre}/paste/detail?id=${pasteRes.paste_id_repr}${pasteFormData.password != '' ? '&needPassword=true' : ''}`
            }}
          </a>
        </template>
        <template #extra>
          <el-button type="primary" @click="back">返回</el-button>
        </template>
      </el-result>
      <el-result v-else icon="error" sub-title="失败">
        <template #extra>
          <el-button type="primary" @click="back">返回</el-button>
        </template>
      </el-result>
    </div>
  </div>
</template>

<style scoped></style>
