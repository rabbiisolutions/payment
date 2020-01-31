import groupWebp from "../assets/images/tuition/group.webp";
import groupJpeg from "../assets/images/tuition/group.jpg";
import personalWebp from "../assets/images/tuition/personal.webp";
import personalJpeg from "../assets/images/tuition/personal.jpg";
import personalIcon from "../assets/icons/tuition/personal.svg";
import groupIcon from "../assets/icons/tuition/group.svg";

const tagLine = 'Overall cost of tuition is dependent on the type of tuition you choose.';

const personal = {
  title: 'Personal Tuition', description: 'The teacher only teaches one student in a home' +
      ' environment. Suitable to students who are weak in particular subjects and parent can' +
      ' afford a number of classes for him/her.',
  image:{jpeg: personalJpeg, webp: personalWebp},
  icon: personalIcon
};

const group = {
  title: 'Group Tuition', description: 'One tutor teachers two or three students. It is most' +
      ' suitable for students who are relatively weak in certain subjects; the price per class' +
      ' is cheaper as compared to personal tuition, thus, a student can take more classes.',
  image:{jpeg: groupJpeg, webp: groupWebp},
  icon: groupIcon
};

const tuition = {
  personal: personal, group: group, tagLine: tagLine
};

export default tuition;
