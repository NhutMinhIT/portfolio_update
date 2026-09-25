import type { Content } from "./content";
import { skills } from "./shared";

export const contentVi: Content = {
  lang: "vi",
  htmlLang: "vi",
  path: "/vi",
  role: "Kỹ sư Phần mềm",
  headline: "Kỹ sư Phần mềm | AI | Chuyển đổi số",
  tagline:
    "Kỹ sư Phần mềm tại THACO Group và học viên Thạc sĩ Ứng dụng Trí tuệ nhân tạo, chuyên về phát triển phần mềm, phân tích hệ thống và xây dựng các giải pháp doanh nghiệp thực tiễn, có khả năng mở rộng và vận hành ổn định khi doanh nghiệp phát triển.",
  summary: [
    "Sinh ra và lớn lên tại Việt Nam, tôi tốt nghiệp Cử nhân Kỹ thuật Phần mềm tại Trường Đại học FPT TP. Hồ Chí Minh năm 2024. Năm 2025, tôi bắt đầu chương trình Thạc sĩ Ứng dụng Trí tuệ nhân tạo tại Viện Quản trị & Công nghệ FSB, Đại học FPT. Từ năm 2026, tôi tham gia nghiên cứu khoa học, tập trung vào Thị giác máy tính (Computer Vision) và Xử lý ngôn ngữ tự nhiên (NLP), với mong muốn kết nối nghiên cứu học thuật và ứng dụng thực tế.",
    "Hiện tại tôi làm Kỹ sư Phần mềm tại THACO Group, chịu trách nhiệm phân tích, phát triển và nâng cấp các hệ thống phần mềm doanh nghiệp phục vụ hơn 60.000 nhân sự trong toàn tập đoàn. Tôi tham gia xuyên suốt vòng đời phát triển, từ phân tích yêu cầu nghiệp vụ và thiết kế giải pháp đến phát triển, tối ưu và cải tiến hệ thống. Công việc của tôi tập trung vào việc mang lại những giải pháp công nghệ ổn định, có khả năng mở rộng và thiết thực với nhu cầu vận hành của tổ chức.",
    "Song song với công việc chuyên môn và nghiên cứu, tôi chịu trách nhiệm chuyển đổi số tại Công ty TNHH Thương mại Xuất nhập khẩu Phúc Nguyên, doanh nghiệp hoạt động trong lĩnh vực logistics và điện máy tiêu dùng. Công việc bao gồm phát triển thương mại điện tử, marketing và chiến lược kinh doanh, với trọng tâm ứng dụng công nghệ để tối ưu vận hành, nâng cao trải nghiệm khách hàng và thúc đẩy tăng trưởng.",
  ],
  focusAreas: [
    {
      label: "Kỹ thuật",
      title: "Kỹ sư Phần mềm",
      detail: "THACO Group · Hệ thống phần mềm doanh nghiệp",
    },
    {
      label: "Nghiên cứu",
      title: "Thạc sĩ Ứng dụng AI",
      detail: "FSB, Đại học FPT · Computer Vision & NLP",
    },
    {
      label: "Kinh doanh",
      title: "Chuyển đổi số",
      detail: "XNK Phúc Nguyên · Thương mại điện tử & vận hành",
    },
  ],
  location: "TP. Hồ Chí Minh, Việt Nam",
  // Giữ dưới ~160 ký tự: Google cắt snippet dài hơn.
  metaDescription:
    "Kỹ sư Phần mềm tại THACO Group, học viên Thạc sĩ Ứng dụng AI (Computer Vision & NLP), phụ trách chuyển đổi số trong logistics và thương mại điện tử.",
  navLinks: [
    { href: "#about", label: "Giới thiệu" },
    { href: "#education", label: "Học vấn" },
    { href: "#skills", label: "Kỹ năng" },
    { href: "#experience", label: "Kinh nghiệm" },
    { href: "#projects", label: "Dự án" },
    { href: "#contact", label: "Liên hệ" },
  ],
  ui: {
    badge: "Sẵn sàng cho cơ hội mới",
    greeting: "Xin chào, đây là portfolio của tôi!",
    intro: "Tôi là",
    getInTouch: "Liên hệ ngay",
    downloadCv: "Tải CV",
    backToTop: "về đầu trang",
    awardsTitle: "Giải thưởng & Thành tích",
    projectsInRole: "Dự án",
    venturesTitle: "Dự án chuyển đổi số",
    stats: [
      { value: "5+", label: "Năm kinh nghiệm" },
      { value: "60K+", label: "Nhân sự trong tập đoàn" },
      { value: "5K+", label: "Người dùng mỗi ngày" },
      { value: "10+", label: "Dự án đã triển khai" },
    ],
    switchLanguage: "View in English",
    switchLanguageShort: "EN",
    githubLabel: "Trang GitHub",
    linkedinLabel: "Trang LinkedIn",
    emailLabel: "Gửi email",
    menuLabel: "Mở/đóng menu điều hướng",
    lightMode: "Giao diện sáng",
    darkMode: "Giao diện tối",
    switchToLight: "Chuyển sang giao diện sáng",
    switchToDark: "Chuyển sang giao diện tối",
    channels: {
      email: "Email",
      phone: "Điện thoại",
      linkedin: "LinkedIn",
      website: "Website",
    },
  },
  sections: {
    about: {
      label: "gioi-thieu",
      title: "Tôi là ai",
      description:
        "Kỹ thuật, nghiên cứu và chuyển đổi số — ba mạch của cùng một mối quan tâm: biến công nghệ thành thứ mà người dùng thực sự dùng được.",
    },
    education: {
      label: "hoc-van-giai-thuong",
      title: "Học vấn & Giải thưởng",
      description: "Quá trình học tập và những ghi nhận nổi bật.",
    },
    skills: {
      label: "ky-nang",
      title: "Công nghệ & Kỹ năng",
      description:
        "Những công cụ và công nghệ tôi dùng để xây dựng sản phẩm có hiệu năng cao và khả năng mở rộng.",
    },
    experience: {
      label: "kinh-nghiem",
      title: "Kinh nghiệm & Dự án",
      description:
        "Những vị trí tôi đã trực tiếp phát triển phần mềm chạy thật cho doanh nghiệp, cùng các dự án đã làm ở đó.",
    },
    contact: {
      label: "lien-he",
      title: "Cùng hợp tác nhé",
      description:
        "Bạn có dự án, vị trí tuyển dụng hay ý tưởng cần trao đổi? Tôi luôn sẵn sàng lắng nghe.",
    },
  },
  educations: [
    {
      school: "Viện Quản trị & Công nghệ FSB, Đại học FPT",
      degree: "Thạc sĩ Kỹ thuật Phần mềm (AI)",
      period: "2025 - 2027",
      highlight: "Học bổng Thạc sĩ cao nhất",
      description:
        "Theo học chương trình chuyên sâu về kỹ thuật phần mềm, hệ thống thông minh và kiến trúc quy mô lớn.",
    },
    {
      school: "Trường Đại học FPT, TP. Hồ Chí Minh",
      degree: "Cử nhân Kỹ thuật Phần mềm",
      period: "11/2019 - 12/2023",
      highlight: "Tốt nghiệp loại Giỏi · Giải Nhì — Cuộc thi F-Voice",
      description:
        "Hoàn thành chương trình với kết quả học tập xuất sắc, đồng thời tích cực tham gia các cuộc thi và hoạt động ngoại khóa để rèn luyện kỹ năng.",
    },
  ],
  awards: [
    { title: "Xếp loại nhân viên: Khá", org: "THACO Group", year: "2025" },
    { title: "Học bổng Thạc sĩ cao nhất", org: "Đại học FPT", year: "2025" },
    { title: "Sinh viên Danh dự của kỳ", org: "Đại học FPT", year: "2021" },
    { title: "Giải Nhì – Cuộc thi F-Voice", org: "Đại học FPT", year: "2020" },
  ],
  experiences: [
    {
      role: "Kỹ sư Phần mềm",
      company: "THACO Group",
      period: "02/2025 - Hiện tại",
      points: [
        "Phát triển và triển khai tính năng mới cho hệ thống phần mềm quản trị nội bộ quy mô lớn, phục vụ hơn 60.000 nhân sự trong tập đoàn thuộc hơn 6 tổng công ty, với khoảng 5.000 người dùng hoạt động mỗi ngày.",
        "Thiết kế kiến trúc lõi của hệ thống và chuẩn hóa mã nguồn để đảm bảo tính nhất quán trong toàn đội.",
        "Áp dụng kiến trúc microservices để xây dựng hệ thống nội bộ và đề xuất các dự án PoC chiến lược (n8n & AI automation, trợ lý ảo Dify.ai, Seafile + OnlyOffice).",
        "Hỗ trợ ban lãnh đạo trong việc ứng dụng công nghệ mới, đóng góp ý tưởng phát triển và chủ động chia sẻ kiến thức trong đội ngũ.",
      ],
      tags: ["Microservices", "Kiến trúc hệ thống", "React", "AI Automation"],
    },
    {
      role: "Kỹ sư Front-End",
      company: "Daoukiwoom Innovation",
      period: "02/2024 - 02/2025",
      points: [
        "Phát triển và triển khai tính năng mới cho nền tảng tuyển dụng theo kiến trúc micro-frontend.",
        "Xây dựng và duy trì các hệ thống quản trị nội bộ và hệ thống sự kiện.",
        "Đóng góp ý tưởng phát triển sản phẩm và chủ động chia sẻ kiến thức trong đội ngũ.",
      ],
      tags: ["Micro-frontend", "Next.js", "Tối ưu hiệu năng"],
    },
    {
      role: "Lập trình viên Front-End (Thực tập)",
      company: "FPT Software",
      period: "09/2022 - 02/2023",
      points: [
        "Tham gia trực tiếp vào dự án của công ty với khách hàng Nhật Bản.",
        "Học quy trình triển khai và phát triển phần mềm thực tế.",
        "Hỗ trợ đội Tester/QC trong các giai đoạn kiểm thử Unit và Integration.",
      ],
      tags: ["React", "Kiểm thử", "Hệ thống đặt chỗ"],
    },
  ],
  projects: [
    {
      name: "THACO E-Sign – Nền tảng Chữ ký số & Phê duyệt điện tử",
      org: "THACO Group",
      role: "Kỹ sư Phần mềm",
      period: "02/2026 - Hiện tại",
      teamSize: "4 thành viên · 20.000+ người dùng · 70.000+ hồ sơ/tháng · ~3.000 hồ sơ/ngày · 6 tập đoàn thành viên",
      points: [
        "Phân tích và phát triển nền tảng Digital Signature & E-Approval phục vụ hơn 20.000 người dùng tại 6 tập đoàn thành viên, xử lý hơn 70.000 hồ sơ/tháng.",
        "Tích hợp Viettel MySign, THACO Internal CA và hệ thống Quản lý lưu trữ văn thư THACO, hình thành luồng xử lý hồ sơ điện tử xuyên suốt từ trình ký, phê duyệt, ký số đến lưu trữ.",
        "Xây dựng Dynamic Workflow Engine, hỗ trợ cấu hình linh hoạt các cấp ký, phương thức ký, điều kiện xử lý và quy trình tuần tự/song song mà không phụ thuộc vào một workflow cố định.",
        "Phát triển cơ chế quản lý toàn bộ vòng đời hồ sơ: submit, approve, request changes, return, reject, recall, edit và re-submit.",
        "Tối ưu pipeline xử lý tài liệu, file streaming/upload/download và database queries, cải thiện khả năng đáp ứng đối với hệ thống có lưu lượng hồ sơ lớn.",
        "Tối ưu kiến trúc và tài nguyên hạ tầng, góp phần giảm chi phí vận hành, hạn chế xử lý dữ liệu dư thừa và nâng cao khả năng mở rộng hệ thống.",
        "Góp phần số hóa quy trình ký/phê duyệt: giảm hồ sơ giấy, rút ngắn thời gian luân chuyển, tăng khả năng truy vết và chuẩn hóa quy trình nghiệp vụ trên toàn hệ thống.",
      ],
      stack: ["Node.js (Express)", "TypeScript", "React.js", "Vite", "Tailwind CSS", "Ant Design", "Redux Toolkit"],
    },
    {
      name: "THACO AUTO MIS",
      org: "THACO Group",
      role: "Kỹ sư Phần mềm",
      period: "05/2025 - Hiện tại",
      teamSize: "~15 thành viên",
      points: [
        "Phát triển cơ chế phân quyền theo vai trò cho các nền tảng nghiệp vụ (Sản xuất, Vận hành kinh doanh, Báo cáo thị trường, Phân tích kinh doanh).",
        "Triển khai phân quyền theo chức danh, khu vực địa lý và phạm vi công ty cho mô hình đa đơn vị, đa vùng.",
        "Xây dựng dashboard thống kê cho mảng Kinh doanh xe, Phụ tùng & Dịch vụ và Sản xuất, tổng hợp theo thời gian, khu vực và thương hiệu.",
        "Phát triển tính năng báo cáo thị trường & VAMA và luồng nhập KPI/chỉ tiêu; quản lý mã nguồn Frontend Portal, CMS và triển khai lên production.",
      ],
      stack: ["TypeScript", "Vue.js", "Nuxt.js", "React.js", "TanStack Query", "Pinia", "Tailwind CSS"],
    },
    {
      name: "Hệ thống Đánh giá Nhân sự",
      org: "THACO Group",
      role: "Kỹ sư Phần mềm",
      period: "06/2025 - 12/2025",
      teamSize: "6 thành viên",
      points: [
        "Thiết lập kiến trúc frontend, quản lý mã nguồn, review code và duy trì tiêu chuẩn phát triển.",
        "Phát triển module quản lý người dùng và phân quyền theo tổ chức cho THACO Group cùng 6 tập đoàn thành viên.",
        "Xây dựng quản lý chu kỳ đánh giá: kỳ đánh giá, nhóm tiêu chí và phân bổ nhân sự vào từng chu kỳ.",
        "Triển khai tổng hợp và báo cáo đánh giá cấp tổng công ty, số hóa và chuẩn hóa quy trình đánh giá nhân sự.",
      ],
      stack: ["TypeScript", "React.js", "Vite", "Tailwind CSS", "Ant Design", "Redux Toolkit"],
    },
    {
      name: "Hệ thống Quản lý Tài liệu THACO",
      org: "THACO Group",
      role: "Kỹ sư Phần mềm",
      period: "03/2025 - 05/2025",
      teamSize: "~4 thành viên",
      points: [
        "Thiết kế phân quyền theo vai trò để kiểm soát truy cập tài liệu chi tiết theo vai trò và phòng ban.",
        "Phát triển hệ thống quản lý tài liệu tập trung với các chức năng tạo, chỉnh sửa, quản lý phiên bản và phân loại.",
        "Xây dựng luồng phê duyệt và chính sách truy cập (công khai, hạn chế, riêng tư) để chuẩn hóa quản trị tài liệu.",
        "Tích hợp watermark động và đồng bộ dữ liệu khi nhân sự nghỉ việc; triển khai toàn bộ hệ thống bằng Docker trên hạ tầng nội bộ.",
      ],
      stack: ["TypeScript", "Python", "Next.js", "NestJS", "FastAPI", "Material UI", "Prisma", "MS SQL", "RabbitMQ", "Docker"],
    },
    {
      name: "Topdev.vn",
      org: "Daoukiwoom Innovation",
      role: "Kỹ sư Front-End",
      period: "02/2024 - 02/2025",
      teamSize: "~10 thành viên",
      points: [
        "Phát triển nền tảng tuyển dụng IT theo hướng cộng đồng, tập trung mạnh vào trải nghiệm người dùng và hiệu năng.",
        "Tối ưu hiệu năng bằng lazy loading, code-splitting và caching để giảm thời gian tải trang.",
        "Phối hợp với Product Owner và SEO Specialist để áp dụng các chuẩn SEO và technical SEO.",
        "Xây dựng dashboard nhà tuyển dụng, tìm kiếm CV, luồng đăng tin, công cụ tính lương (gross/net) và các website sự kiện lưu lượng cao.",
      ],
      stack: ["TypeScript", "React.js", "Next.js", "Vue.js", "Tailwind CSS", "Shadcn UI", "Material UI", "Redux Toolkit", "Storybook"],
    },
    {
      name: "Hệ thống Đặt phòng Trực tuyến",
      org: "FPT Software",
      role: "Kỹ sư Front-End",
      period: "09/2022 - 02/2023",
      teamSize: "~200 thành viên",
      points: [
        "Phát triển hệ thống đặt phòng trên nền web với hơn 40 bộ lọc nâng cao.",
        "Tối ưu hiệu năng tải dữ liệu API bằng debounce, phân trang và lazy loading.",
        "Áp dụng nguyên tắc thiết kế mobile-first.",
        "Hỗ trợ đội QA và Tester để đảm bảo chất lượng sản phẩm.",
      ],
      stack: ["TypeScript", "React.js", "Redux Toolkit", "single-spa", "MS SQL"],
    },
  ],
  skills,
};
