import React from "react";
import "./Theory.css";

const Theory: React.FC = () => {
  return (
    <div className="theory-bg-wrapper">
      <div className="theory-container">
        <h2>Kiến thức nền tảng</h2>

        {/* Khái niệm */}
        <div className="philosophy-section">
          <h4>Quy luật mâu thuẫn trong triết học Mác – Lênin</h4>
          <p>
            Quy luật mâu thuẫn là một trong ba quy luật cơ bản của phép biện
            chứng duy vật. Nó khẳng định rằng trong mọi sự vật, hiện tượng đều
            tồn tại các mặt đối lập. Chúng vừa thống nhất, vừa đấu tranh với
            nhau, tạo nên sự vận động và phát triển không ngừng của thế giới.
          </p>
        </div>

        {/* Đặc điểm */}
        <div className="philosophy-section">
          <h4>Đặc điểm của mâu thuẫn</h4>
          <ul>
            <li>
              🔍 Mâu thuẫn tồn tại khách quan, không phụ thuộc vào ý muốn chủ
              quan.
            </li>
            <li>
              🧩 Có nhiều loại mâu thuẫn: cơ bản – không cơ bản, đối kháng –
              không đối kháng.
            </li>
            <li>
              🔄 Quá trình phát triển là quá trình phát sinh, phát triển và giải
              quyết mâu thuẫn.
            </li>
          </ul>
        </div>

        {/* Ý nghĩa */}
        <div className="philosophy-section">
          <h4>Ý nghĩa thực tiễn</h4>
          <p>
            Hiểu rõ quy luật mâu thuẫn giúp ta phân tích các vấn đề trong học
            tập, công việc và xã hội một cách khoa học. Thay vì né tránh, ta cần
            nhận diện và giải quyết mâu thuẫn đúng phương pháp để tạo ra sự phát
            triển bền vững.
          </p>
        </div>

        {/* Ví dụ */}
        <div className="philosophy-examples">
          <h4>Một số ví dụ minh họa:</h4>
          <ul>
            <li>
              <strong>Kinh tế & Môi trường:</strong> Xây dựng nhà máy giúp tăng
              trưởng kinh tế nhưng gây ô nhiễm, cần hướng tới phát triển bền
              vững.
            </li>
            <li>
              <strong>Học tập & Giải trí:</strong> Học sinh cần cân bằng giữa
              học và nghỉ ngơi để đạt hiệu quả cao.
            </li>
            <li>
              <strong>Công nghệ & Bảo mật:</strong> Tiện ích từ mạng xã hội đi
              kèm rủi ro về an toàn thông tin cá nhân.
            </li>
            <li>
              <strong>Tài chính cá nhân:</strong> Tiết kiệm mang lại an toàn
              nhưng quá mức có thể ảnh hưởng chất lượng cuộc sống.
            </li>
            <li>
              <strong>Biến đổi khí hậu:</strong> Mâu thuẫn giữa tăng trưởng công
              nghiệp và trách nhiệm bảo vệ môi trường toàn cầu.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Theory;
