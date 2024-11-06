<template>
  <div id="app">
    <form-create
      v-model="fApi"
      :rule="rule"
      :option="option"
      :value.sync="value"
    ></form-create>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //实例对象
      fApi: {},
      //表单数据
      value: {},
      //表单生成规则
      rule: [
        {
          type: "radio",
          field: "a",
          title: "关联已有班课",
          value: false,
          options: [
            { value: true, label: "是" },
            { value: false, label: "否" },
          ],
          effect: {
            required: true,
          },
        },
        {
          type: "radio",
          field: "b",
          title: "是否规则排课",
          value: false,
          options: [
            { value: true, label: "是" },
            { value: false, label: "否" },
          ],
          effect: {
            required: true,
          },
        },
        {
          type: "group",
          field: "rlClasscld",
          title: "排课详情",
          value: [{ f: "aaa" }, { f: "bbb" }],
          props: {
            defaultValue: { id: "abc" },
            rules: [
              {
                type: "input",
                field: "name",
                title: "课节名称",
              },
              {
                type: "select",
                field: "rlclass",
                title: "关联已有班课",
                value: "",
                options: [],
              },
            ],
          },
        },
      ],
      //组件参数配置
      option: {
        //表单提交事件
        onSubmit: function (formData) {
          alert(JSON.stringify(formData));
        },
      },
    };
  },
};
</script>
